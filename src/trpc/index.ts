import { z } from "zod";
import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";
import { QueryValidator } from "../lib/validators/query-validator";
import { getPayloadClient } from "../payload";
import { paymentRouter } from "./payment-router";

export const appRouter = router({
	auth: authRouter,
	payment: paymentRouter,

	getInfiniteProducts: publicProcedure
		.input(
			z.object({
				limit: z.number().min(1).max(100),
				cursor: z.number().nullish(),
				query: QueryValidator,
			})
		)
		.query(async ({ input }) => {
			const { query, cursor } = input;
			const { sort, limit, ...rest } = query;

			const payload = await getPayloadClient();

			const parsedQueryOptions: Record<string, { equals: string }> = {};

			const page = cursor || 1;

			Object.entries(rest).forEach(([key, value]) => {
				parsedQueryOptions[key] = {
					equals: value,
				};
			});

			const {
				docs: items,
				hasNextPage,
				nextPage,
			} = await payload.find({
				collection: "products",
				where: {
					approvedForSale: {
						equals: "approved",
					},
					...parsedQueryOptions,
				},
				sort,
				depth: 1,
				limit,
				page,
			});

			return {
				items,
				nextPage: hasNextPage ? nextPage : null,
			};
		}),
});

export type AppRouter = typeof appRouter;
