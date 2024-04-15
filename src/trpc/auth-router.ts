import { AuthCredentialsValidator } from "../lib/validators/auth-credentials-validator";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "../payload";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const authRouter = router({
	createPayloadUser: publicProcedure
		.input(AuthCredentialsValidator)
		.mutation(async ({ input }) => {
			const { email, password } = input;
			const payload = await getPayloadClient();

			const { docs: users } = await payload.find({
				collection: "users",
				where: {
					email: {
						equals: email,
					},
				},
			});

			if (users.length > 0) {
				throw new TRPCError({ code: "CONFLICT" });
			}

			await payload.create({
				collection: "users",
				data: {
					email,
					password,
					role: "user",
				},
			});

			return { success: true, sentTo: email };
		}),

	verifyEmail: publicProcedure
		.input(z.object({ token: z.string() }))
		.query(async ({ input }) => {
			const { token } = input;

			const payload = await getPayloadClient();

			const isVerified = await payload.verifyEmail({
				collection: "users",
				token,
			});

			if (!isVerified) throw new TRPCError({ code: "UNAUTHORIZED" });

			return { success: true };
		}),

	signIn: publicProcedure
		.input(AuthCredentialsValidator)
		.mutation(async ({ input, ctx }) => {
			const { email, password } = input;
			const { res } = ctx;

			const payload = await getPayloadClient();

			try {
				await payload.login({
					collection: "users",
					data: {
						email,
						password,
					},
					res,
				});

				return { success: true };
			} catch {
				throw new TRPCError({ code: "UNAUTHORIZED" });
			}
		}),

	forgotPassword: publicProcedure
		.input(z.object({ email: z.string() }))
		.mutation(async ({ input }) => {
			const { email } = input;
			const payload = await getPayloadClient();

			console.log("sent" + email);

			try {
				await payload.forgotPassword({
					collection: "users",
					data: {
						email,
					},
					expiration: 60 * 60 * 24,
				});

				return { success: true };
			} catch (e) {
				throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
			}
		}),
});
