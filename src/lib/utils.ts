import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatPrice(
	price: number | string,
	options: {
		currency?: "RUB" | "USD" | "CNY";
		notation?: Intl.NumberFormatOptions["notation"];
	} = {}
) {
	const { currency = "RUB", notation = "standard" } = options;

	const numericPrice = typeof price === "string" ? parseFloat(price) : price;

	return new Intl.NumberFormat("ru-RU", {
		style: "currency",
		currency,
		notation,
		maximumFractionDigits: 2,
	}).format(numericPrice);
}
