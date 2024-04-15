import { webpackBundler } from "@payloadcms/bundler-webpack";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload/config";
import path from "path";
import dotenv from "dotenv";

import { Users } from "./collections/Users";
import { Products } from "./collections/Products/Products";
import { Media } from "./collections/Media";
import { Orders } from "./collections/Orders";
import { ProductReceipt } from "./collections/ProductReceipt";

dotenv.config({
	path: path.resolve(__dirname, "../.env"),
});

export default buildConfig({
	serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
	collections: [Users, Products, Media, Orders, ProductReceipt],
	routes: {
		admin: "/sell",
	},
	admin: {
		user: "users",
		bundler: webpackBundler(),
		meta: {
			titleSuffix: "- Givemegift",
			favicon: "/favicon.ico",
			ogImage: "/thumbnail.png",
		},
	},
	rateLimit: {
		max: 2000,
	},
	editor: lexicalEditor({}),
	db: postgresAdapter({
		pool: {
			connectionString: process.env.POSTGRES_URL!,
		},
	}),
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	},
});
