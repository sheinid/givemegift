"use client";

import { TQueryValidator } from "@/lib/validators/query-validator";
import { Product } from "@/payload-types";
import { trpc } from "@/trpc/client";
import Link from "next/link";
import ProductListing from "./ProductListing";

interface ProductReelProps {
	title: string;
	subTitle?: string;
	href?: string;
	query: TQueryValidator;
}

const ProductsReel = (props: ProductReelProps) => {
	const { title, subTitle, href, query } = props;

	const FALLBACK_LIMIT = 4;

	const { data: queryData, isLoading } =
		trpc.getInfiniteProducts.useInfiniteQuery(
			{
				limit: query.limit ?? FALLBACK_LIMIT,
				query,
			},
			{
				getNextPageParam: (lastPage) => lastPage.nextPage,
			}
		);

	const products = queryData?.pages.flatMap((page) => page.items);

	let map: (Product | null)[] = [];

	if (products && products.length > 0) {
		map = products;
	} else if (isLoading) {
		map = new Array(query.limit ?? FALLBACK_LIMIT).fill(null);
	}

	return (
		<section className="py-12">
			<div className="md:flex md:items-center md:justify-between mb-4">
				<div className="max-w-2xl px-4 lg:max-w-4xl lg:px-0">
					<h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
						{title}
					</h1>
					{subTitle ? (
						<p className="text-muted-foreground mt-2 text-sm">
							{subTitle}
						</p>
					) : null}
				</div>
				{href ? (
					<Link
						href={href}
						className="hidden text-sm font-medium text-orange-600 hover:text-orage-500 md:block"
					>
						Перейти к коллекции{" "}
						<span aria-hidden="true">&rarr;</span>
					</Link>
				) : null}
			</div>

			<div className="relative">
				<div className="mt-6 flex items-center w-full">
					<div className="w-full grid grid-col-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
						{map.map((product, i) => (
							<ProductListing key={i} product={product} id={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

ProductsReel.displayName = "ProductsReel";

export default ProductsReel;
