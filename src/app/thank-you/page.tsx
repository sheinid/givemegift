import { PRODUCT_CATEGORIES } from "@/config";
import { getServerSideUser } from "@/lib/payload-utils";
import { formatPrice } from "@/lib/utils";
import { getPayloadClient } from "@/payload";
import { Product, ProductReceipt } from "@/payload-types";
import { cookies } from "next/headers";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";

interface PageProps {
	searchParams: { [key: string]: string | string[] | undefined };
}

const ThankYouPage = async ({ searchParams }: PageProps) => {
	const orderId = searchParams.orderId;

	const nextCookies = cookies();

	const { user } = await getServerSideUser(nextCookies);

	const payload = await getPayloadClient();

	const { docs: orders } = await payload.find({
		collection: "orders",
		depth: 2,
		where: {
			id: {
				equals: orderId,
			},
		},
	});

	const [order] = orders;

	if (!order) return notFound();

	const orderUserId =
		typeof order.user === "number" ? order.user : order.user.id;

	if (orderUserId !== user?.id) {
		return redirect(`/sign-in?origin=thank-you?orderId=${orderId}`);
	}

	return (
		<main className="relative lg:min-h-full">
			<div className="h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
				<Image
					fill
					src="/thank-you.png"
					alt="Thank you"
					className="hidden md:block h-full w-full object-cover object-center"
				/>
			</div>

			<div>
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
					<div className="lg:col-start-2">
						<p className="text-sm font-medium text-orange-600">
							Заказ успешно оформлен
						</p>
						<h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
							Спасибо за покупку
						</h1>

						{order._isPaid ? (
							<p className="mt-2 text-base text-muted-foreground">
								Ваш заказ обработан и продавец получил ваши
								данные. Мы отправили чек о покупке на{" "}
								{typeof order.user !== "number" ? (
									<span className="font-medium text-gray-900">
										{order.user.email}
									</span>
								) : null}
								.
							</p>
						) : (
							<p className="mt-2 text-base text-muted-foreground">
								Спасибо за покупку! Ваш заказ в обработке.
								Подождите пожалуйста, скоро мы отправим вам
								подтверждение.
							</p>
						)}

						<div className="mt-16 text-sm font-medium">
							<div className="text-muted-foreground">
								Номер заказа
							</div>
							<div className="mt-2 text-gray-900">{order.id}</div>

							<ul className="mt-6 divide-y divide-gray-200 border-t bordre-gray-200 font-medium text-muted-foreground">
								{(order.products as Product[]).map(
									(product) => {
										const label = PRODUCT_CATEGORIES.find(
											({ value }) =>
												value === product.category
										)?.label;

										const receiptUrl = (
											product.product_receipt as ProductReceipt
										).url as string;

										const { image } =
											product.images[0] || {};

										return (
											<li
												key={product.id}
												className="flex space-x-6 py-6"
											>
												<div className="relative h-24 w-24">
													{typeof image !==
														"number" &&
													image.url ? (
														<Image
															src={image.url}
															fill
															alt={
																image.alt ||
																"product image"
															}
															className="flex-none rounded-md bg-gray-100 object-cover object-center"
														/>
													) : null}
												</div>

												<div className="flex-auto flex-col justify-between">
													<div className="space-y-1">
														<h3 className="text-gray-900">
															{product.name}
														</h3>

														<p className="my-1">
															{label}
														</p>
													</div>

													{order._isPaid ? (
														<a
															href={receiptUrl}
															download={
																product.name
															}
															className="text-orange-600 hover:underline underline-offset-2"
														>
															Скачать чек
														</a>
													) : null}
												</div>

												<p className="flex-none font-medium text-gray-900">
													{formatPrice(product.price)}
												</p>
											</li>
										);
									}
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ThankYouPage;
