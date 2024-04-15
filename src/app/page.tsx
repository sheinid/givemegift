import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductsReel from "@/components/ProductsReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { HandHeart, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";

const perks = [
	{
		name: "Быстрая доставка",
		icon: Truck,
		description:
			"Получайте свои подарки в любую точку Москвы и МО в течение трех дней.",
	},
	{
		name: "Гарантия качества",
		icon: ShieldCheck,
		description:
			"Каждое подарочное изделие проходит несколько этапов проверки и сертификации. Получили брак? Мы предлагаем 30 дней гарантии на возврат.",
	},
	{
		name: "Подарки на все случаи жизни",
		icon: HandHeart,
		description:
			"Мы предлагаем подарки на любые случаи жизни. Не только для детей, но и для взрослых.",
	},
];

export default function Home() {
	return (
		<>
			<MaxWidthWrapper>
				<div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Удобный маркетплейс для{" "}
						<span className="text-primary">ваших подарков</span>.
					</h1>
					<p className="mt-6 text-lg max-w-prose text-muted-foreground">
						Добро пожаловать на Givemegift. Мы рады предоставлять
						вам самые качественные подарки на рынке!
					</p>
					<div className="flex flex-col sm:flex-row gap-4 mt-6">
						<Link className={buttonVariants()} href="/products">
							Перейти к каталогу
						</Link>
						<Button variant="ghost">
							Наши преимущества &rarr;
						</Button>
					</div>
				</div>

				<ProductsReel
					title="Недавно добавленные"
					href="/products"
					query={{
						sort: "desc",
						limit: 4,
					}}
				/>
			</MaxWidthWrapper>

			<section className="border-t border-gray-200 bg-gray-50">
				<MaxWidthWrapper className="py-20">
					<div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
						{perks.map((perk) => (
							<div
								key={perk.name}
								className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
							>
								<div className="md:flex-shrink-0 flex justify-center">
									<div className="h-16 w-16 flex items-center justify-center rounded-full bg-orange-200 text-orange-900">
										{<perk.icon className="w-1/3 h-1/3" />}
									</div>
								</div>

								<div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
									<h3 className="text-base font-medium text-gray-900">
										{perk.name}
									</h3>
									<p className="mt-3 text-sm text-muted-foreground">
										{perk.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</MaxWidthWrapper>
			</section>
		</>
	);
}
