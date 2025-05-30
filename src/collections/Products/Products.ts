import { Product } from "../../payload-types";
import { PRODUCT_CATEGORIES } from "../../config";
import { CollectionConfig } from "payload/types";
import { BeforeChangeHook } from "payload/dist/collections/config/types";
import { stripe } from "../../lib/stripe";

const addUser: BeforeChangeHook<Product> = async ({ req, data }) => {
	const user = req.user;

	return {
		...data,
		user: user.id,
	};
};

export const Products: CollectionConfig = {
	slug: "products",
	admin: {
		useAsTitle: "name",
	},
	access: {
		read: () => true,
	},
	hooks: {
		beforeChange: [
			addUser,
			async (args) => {
				if (args.operation === "create") {
					const data = args.data as Product;
					const createdProduct = await stripe.products.create({
						name: data.name,
						default_price_data: {
							currency: "rub",
							unit_amount: Math.round(data.price * 100),
						},
					});
					const updated: Product = {
						...data,
						stripeId: createdProduct.id,
						priceId: createdProduct.default_price as string,
					};

					return updated;
				} else if (args.operation === "update") {
					const data = args.data as Product;
					const updatedProduct = await stripe.products.update(
						data.stripeId!,
						{
							name: data.name,
							default_price: data.priceId!,
						}
					);
					const updated: Product = {
						...data,
						stripeId: updatedProduct.id,
						priceId: updatedProduct.default_price as string,
					};

					return updated;
				}
			},
		],
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
			name: "name",
			label: "Name",
			type: "text",
			required: true,
		},
		{
			name: "description",
			label: "Product details",
			type: "textarea",
		},
		{
			name: "price",
			label: "Price in RUB",
			min: 0,
			max: 100000,
			type: "number",
			required: true,
		},
		{
			name: "category",
			label: "Category",
			type: "select",
			options: PRODUCT_CATEGORIES.map(({ label, value }) => ({
				label: label,
				value: value,
			})),
			required: true,
		},
		{
			name: "product_receipt",
			label: "Product receipt",
			type: "relationship",
			required: true,
			relationTo: "product_receipt",
			hasMany: false,
		},
		{
			name: "approvedForSale",
			label: "Status",
			type: "select",
			defaultValue: "pending",
			access: {
				create: ({ req }) => req.user?.role === "admin",
				read: ({ req }) => req.user?.role === "admin",
				update: ({ req }) => req.user?.role === "admin",
			},
			options: [
				{
					label: "Pending verification",
					value: "pending",
				},
				{
					label: "Approved for sale",
					value: "approved",
				},
				{
					label: "Rejected",
					value: "rejected",
				},
			],
		},
		{
			name: "priceId",
			label: "Price ID",
			type: "text",
			admin: {
				hidden: true,
			},
			access: {
				create: () => false,
				read: () => false,
				update: () => false,
			},
		},
		{
			name: "stripeId",
			label: "Stripe ID",
			type: "text",
			admin: {
				hidden: true,
			},
			access: {
				create: () => false,
				read: () => false,
				update: () => false,
			},
		},
		{
			name: "images",
			type: "array",
			label: "Product images",
			minRows: 1,
			maxRows: 8,
			required: true,
			labels: {
				singular: "Image",
				plural: "Images",
			},
			fields: [
				{
					name: "image",
					type: "upload",
					relationTo: "media",
					required: true,
				},
			],
		},
	],
};
