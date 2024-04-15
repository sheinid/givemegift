import { Order, Product } from "@/payload-types";
import { User } from "payload/auth";
import { BeforeChangeHook } from "payload/dist/globals/config/types";
import { Access, CollectionConfig } from "payload/types";

const addUser: BeforeChangeHook = ({ req, data }) => {
	const user = req.user as User | null;
	return { ...data, user: user?.id };
};

const yourOwnAndPurchased: Access = async ({ req }) => {
	const user = req.user as User | null;

	if (user?.role === "admin") return true;
	if (!user) return false;

	const { docs: products } = await req.payload.find({
		collection: "products",
		depth: 0,
		where: {
			user: {
				equals: user.id,
			},
		},
	});

	const ownProductReceiptIds = products
		.map((product) => product.product_receipt)
		.flat();

	const { docs: orders } = await req.payload.find({
		collection: "orders",
		depth: 2,
		where: {
			user: {
				equals: user.id,
			},
		},
	});

	const purchasedProductReceiptIds = orders.map((order: Order) => {
		return order.products
			.map((product: number | Product) => {
				if (typeof product === "number")
					return req.payload.logger.error(
						`Cannot find purchased file IDs`
					);

				return typeof product?.product_receipt === "number"
					? product?.product_receipt
					: product?.product_receipt.id;
			})
			.filter(Boolean)
			.flat();
	});

	return {
		id: {
			in: [...ownProductReceiptIds, ...purchasedProductReceiptIds],
		},
	};
};

export const ProductReceipt: CollectionConfig = {
	slug: "product_receipt",
	admin: {
		hidden: ({ user }) => user?.role !== "admin",
	},
	hooks: {
		beforeChange: [addUser as any],
	},
	access: {
		read: yourOwnAndPurchased,
		update: ({ req }) => req.user?.role === "admin",
		delete: ({ req }) => req.user?.role === "admin",
	},
	upload: {
		staticURL: "/receipts",
		staticDir: "receipts",
		mimeTypes: ["image/*", "application/pdf", "application/x-pdf"],
	},
	fields: [
		{
			name: "user",
			type: "relationship",
			relationTo: "users",
			required: true,
			hasMany: false,
			admin: {
				condition: () => false,
			},
		},
		{
			name: "product",
			type: "relationship",
			relationTo: "products",
			required: true,
			hasMany: false,
			admin: {
				condition: () => false,
			},
		},
	],
};
