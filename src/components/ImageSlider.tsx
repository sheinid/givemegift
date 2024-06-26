"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type SwiperType from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
	urls: string[];
}

const ImageSlider = ({ urls }: ImageSliderProps) => {
	const [swiper, setSwiper] = useState<SwiperType | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	const [slideConfig, setSlideConfig] = useState({
		isBeginning: true,
		isEnd: activeIndex === (urls.length ?? 0) - 1,
	});

	useEffect(() => {
		swiper?.on("slideChange", ({ activeIndex }) => {
			setActiveIndex(activeIndex);
			setSlideConfig({
				isBeginning: activeIndex === 0,
				isEnd: activeIndex === (urls.length ?? 0) - 1,
			});
		});
	}, [swiper, urls.length]);

	const activeStyles =
		"active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2- bg-white border-zinc-300";

	const inactiveStyles = "hidden text-gray-400";

	return (
		<div className="group relative bg-zinc-100 aspect-square overflow-hidden rounded-xl">
			<div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition">
				<button
					onClick={(e) => {
						e.preventDefault();
						swiper?.slideNext();
					}}
					className={cn(activeStyles, "right-3 transition", {
						[inactiveStyles]: slideConfig.isEnd,
						"hover:bg-primary-300 text-primary-800 opacity-100":
							!slideConfig.isEnd,
					})}
					aria-label="next slide"
				>
					<ChevronRight className="h-4 w-4 text-zinc-700" />{" "}
				</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						swiper?.slidePrev();
					}}
					className={cn(activeStyles, "left-3 transition", {
						[inactiveStyles]: slideConfig.isBeginning,
						"hover:bg-primary-300 text-primary-800 opacity-100":
							!slideConfig.isBeginning,
					})}
					aria-label="previous slide"
				>
					<ChevronLeft className="h-4 w-4 text-zinc-700" />{" "}
				</button>
			</div>

			<Swiper
				className="h-full w-full relative -z-10"
				spaceBetween={50}
				slidesPerView={1}
				modules={[Pagination]}
				pagination={{
					renderBullet: (_, className) => {
						return `<span class="rounded-full transition ${className}"></span>`;
					},
				}}
				onSwiper={(swiper) => setSwiper(swiper)}
			>
				{urls.map((url, i) => (
					<SwiperSlide key={i}>
						<Image
							className="-z-10 h-full w-full object-cover object-center"
							loading="eager"
							src={url}
							alt="Product image"
							fill
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

ImageSlider.displayName = "ImageSlider";

export default ImageSlider;
