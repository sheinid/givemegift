import { PRODUCT_CATEGORIES } from "../../config";
import { CollectionConfig } from "payload/types";

export const Products: CollectionConfig = {
	slug: "products",
	admin: {
		useAsTitle: "name",
	},
	access: {},
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
