"use client";

import Link from "next/link";
import { Icons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	AuthCredentialsValidator,
	TAuthCredentialsValidator,
} from "@/lib/validators/auth-credentials-validator";
import { trpc } from "@/trpc/client";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const isSeller = searchParams.get("as") === "seller";
	const origin = searchParams.get("origin");

	const continueAsSeller = () => {
		router.push("/login?as=seller");
	};

	const continueAsBuyer = () => {
		router.replace("/login", undefined);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TAuthCredentialsValidator>({
		resolver: zodResolver(AuthCredentialsValidator),
	});

	const { mutate: login, isLoading } = trpc.auth.signIn.useMutation({
		onSuccess: () => {
			toast.success("Вы успешно вошли в аккаунт");

			if (origin) {
				router.push(`/${origin}`);
				router.refresh();
				return;
			}

			if (isSeller) {
				router.push("/sell");
				router.refresh();
				return;
			}

			router.push("/");
			router.refresh();
		},
		onError: (err) => {
			if (err.data?.code === "UNAUTHORIZED") {
				toast.error("Неправильная почта или пароль");
				return;
			}
		},
	});

	const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
		login({ email, password });
	};

	return (
		<>
			<div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
				<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
					<div className="flex flex-col items-center space-y-2 text-center">
						<Icons.logo className="h-20 w-20" />
						<h1 className="text-2xl font-bold">
							Войдите в{" "}
							{isSeller ? "аккаунт продавца" : "аккаунт"}
						</h1>

						<Link
							href="/register"
							className={buttonVariants({
								variant: "link",
								className: "gap-1.5",
							})}
						>
							Еще нет аккаунта? Создать
							<ArrowRight className="w-3 h-3" />
						</Link>
					</div>

					<div className="grid gap-6">
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
								<div className="grid gap-1 py-2">
									<Label htmlFor="password">Пароль</Label>
									<Input
										{...register("password")}
										className={cn({
											"focus-visible: ring-red-500":
												errors.password,
										})}
										placeholder="••••••••"
										type="password"
									/>

									{errors.password && (
										<p className="text-sm text-red-500">
											{errors.password.message}
										</p>
									)}

									<Link
										href="/forgot-password"
										className="text-sm font-semibold text-muted-foreground hover:underline"
									>
										Забыли пароль?
									</Link>
								</div>
								<Button disabled={isLoading}>Войти</Button>
							</div>
						</form>

						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<span className="w-full border-t" />
							</div>
							<div className="relative flex justify-center text-xs uppercase">
								<span className="bg-background px-2 text-muted-foreground">
									или
								</span>
							</div>
						</div>

						{isSeller ? (
							<Button
								onClick={continueAsBuyer}
								variant="secondary"
								disabled={isLoading}
							>
								Продолжить как покупатель
							</Button>
						) : (
							<Button
								onClick={continueAsSeller}
								variant="secondary"
								disabled={isLoading}
							>
								Продолжить как продавец
							</Button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
