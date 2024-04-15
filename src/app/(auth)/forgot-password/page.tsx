"use client";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
	AuthCredentialsValidator,
	TAuthCredentialsValidator,
} from "@/lib/validators/auth-credentials-validator";
import { trpc } from "@/trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ForgotPasswordPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TAuthCredentialsValidator>({
		resolver: zodResolver(AuthCredentialsValidator),
	});

	const { mutate: send, isLoading } = trpc.auth.forgotPassword.useMutation({
		onSuccess: () => {
			toast.success(
				"Письмо с инструкциями по восстановлению пароля отправлено"
			);
		},
		onError: (err) => {
			if (err.data?.code === "UNAUTHORIZED") {
				toast.error("Неправильная почта или пароль");
				return;
			}
		},
	});

	const onSubmit = ({ email }: TAuthCredentialsValidator) => {
		send({ email });
	};

	return (
		<div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
			<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
				<div className="flex flex-col items-center space-y-2 text-center">
					<Icons.logo className="h-20 w-20" />
					<h1 className="text-2xl font-bold">Забыли пароль?</h1>
					<p className="text-sm text-muted-foreground mt-2">
						Введите почту, к которой был привязан аккаунт.
					</p>
				</div>

				<div className="grid g-6">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="grid gap-2">
							<div className="grid gap-1 py-2">
								<Label htmlFor="email">Email</Label>
								<Input
									{...register("email")}
									className={cn({
										"focus-visible: ring-red-500":
											errors.email,
									})}
									type="email"
									placeholder="email@example.com"
								/>
								{errors.email && (
									<p className="text-sm text-red-500">
										{errors.email.message}
									</p>
								)}
							</div>
							<Button disabled={isLoading}>
								Восстановить аккаунт
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ForgotPasswordPage;
