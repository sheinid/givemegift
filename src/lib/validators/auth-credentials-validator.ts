import { z } from "zod";

export const AuthCredentialsValidator = z.object({
	email: z.string().email({ message: "Некорректная почта" }),
	password: z
		.string()
		.min(8, { message: "Минимальная длина пароля 8 символов" }),
});

export type TAuthCredentialsValidator = z.infer<
	typeof AuthCredentialsValidator
>;
