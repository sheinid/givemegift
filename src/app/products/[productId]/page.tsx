import ImageSlider from "@/components/ImageSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductsReel from "@/components/ProductsReel";
import { Button } from "@/components/ui/button";
import { PRODUCT_CATEGORIES } from "@/config";
import { formatPrice } from "@/lib/utils";
import { getPayloadClient } from "@/payload";
import { CheckIcon, Shield } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface ProductPageProps {
	params: {
		productId: string;
	};
}

const BREADCRUMBS = [
	{
		id: 1,
		name: "Главная",
		href: "/",
	},
	{
		id: 2,
		name: "Каталог",
		href: "/products",
	},
];

const ProductPage = async ({ params }: ProductPageProps) => {
	const { productId } = params;

	const payload = await getPayloadClient();

	const { docs: products } = await payload.find({
		collection: "products",
		limit: 1,
		where: {
			id: {
				equals: productId,
			},
			approvedForSale: {
				equals: "approved",
			},
		},
	});

	const [product] = products;

	if (!product) return notFound();

	const label = PRODUCT_CATEGORIES.find(
		({ value }) => value === product.category
	)?.label;

	const validUrls = product.images
		.map(({ image }) => (typeof image === "number" ? image : image.url))
		.filter(Boolean) as string[];

	return (
		<MaxWidthWrapper className="bg-white">
			<div className="bg-white">
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:my-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
					{/* Product details */}
					<div className="lg:max-w-lg lg:self-end">
						<ol className="flex items-center space-x-2">
							{BREADCRUMBS.map((breadcrumb, i) => (
								<li key={breadcrumb.id}>
									<div className="flex items-center text-sm">
										<Link
											href={breadcrumb.href}
											className="font-medium text-sm text-muted-foreground hover:text-gray-900"
										>
											{breadcrumb.name}
										</Link>
										{i !== BREADCRUMBS.length - 1 ? (
											<svg
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
											>
												<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
											</svg>
										) : null}
									</div>
								</li>
							))}
						</ol>

						<div className="mt-4">
							<h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								{product.name}
							</h1>
						</div>

						<section className="mt-4">
							<div className="flex items-center">
								<p className="font-medium text-gray-900">
									{formatPrice(product.price)}
								</p>

								<div className="ml-4 border-l text-muted-foreground border-gray-300 pl-4">
									{label}
								</div>
							</div>

							<div className="mt-4 space-y-6">
								<p className="text-base text-muted-foreground">
									{product.description}
								</p>
							</div>

							<div className="mt-6 flex items-center">
								<CheckIcon
									aria-hidden="true"
									className="h-5 w-5 flex-shrink-0 text-green-500"
								/>
								{/* TODO: добавить состояние нет в наличии */}
								<p className="ml-2 text-sm text-muted-foreground">
									В наличии
								</p>
							</div>
						</section>
					</div>

					<div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
						<div className="aspect-square rounded-lg">
							<ImageSlider urls={validUrls} />
						</div>
					</div>

					{/* TODO: Cart functionality */}
					<div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
						<div>
							<div className="mt-10">
								<Button className="w-full">
									Добавить в корзину
								</Button>
								{/* <AddToCartButton /> */}
							</div>

							{product.category !== "flowers" ? (
								<div className="mt-6 text-center">
									<div className="group inline-flex text-sm text-medium">
										<Shield
											aria-hidden="true"
											className="mr-2 h-5 w-5 flex-shrink-0 text-gray-400"
										/>
										<span className="text-muted-foreground group-hover:text-gray-700">
											30 Дней Гарантии На Возврат
										</span>
									</div>
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>

			<ProductsReel
				href="/products"
				query={{
					category: product.category,
					limit: 4,
				}}
				title={`Похожие ${label}`}
				subTitle={`Смотреть похожие ${label}, прямо как '${product.name}'`}
			/>
		</MaxWidthWrapper>
	);
};

export default ProductPage;
