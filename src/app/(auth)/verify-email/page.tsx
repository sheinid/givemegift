import VerifyEmail from "@/components/VerifyEmail";
import Image from "next/image";

interface VerifyEmailPageProps {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
}

const VerifyEmailPage = ({ searchParams }: VerifyEmailPageProps) => {
	const token = searchParams.token;
	const toEmail = searchParams.toEmail;

	return (
		<div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
			<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
				{token && typeof token === "string" ? (
					<div className="grid gap-6">
						<VerifyEmail token={token} />
					</div>
				) : (
					<div className="flex h-full flex-col items-center justify-center space-y-1">
						<div className="relative mb-0 h-60 w-60 to-muted-foreground">
							<Image
								src="/email-sent.png"
								alt="Email sent image"
								fill
							/>
						</div>

						<h3 className="font-semibold text-2xl">
							Проверьте вашу почту
						</h3>

						{toEmail ? (
							<p className="text-muted-foreground text-center">
								Мы отправили ссылку подтверждения на{" "}
								<span className="font-semibold">{toEmail}</span>
								.
							</p>
						) : (
							<p className="text-muted-foreground text-center">
								Мы отправили ссылку подтверждения на{" "}
								<span className="font-semibold">Ваш email</span>
								.
							</p>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default VerifyEmailPage;
