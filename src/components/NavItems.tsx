"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-click-outside";

const NavItems = () => {
	const [activeIndex, setActiveIndex] = useState<null | number>(null);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setActiveIndex(null);
			}
		};

		document.addEventListener("keydown", handleEscape);

		return () => document.removeEventListener("keydown", handleEscape);
	}, []);

	const isAnyOpen = activeIndex !== null;

	const navRef = useRef<HTMLDivElement | null>(null);

	useOnClickOutside(navRef, () => setActiveIndex(null));

	return (
		<div className="flex gap-4 h-full" ref={navRef}>
			{PRODUCT_CATEGORIES.map((category, i) => {
				const handleOpen = () => {
					if (i === activeIndex) {
						setActiveIndex(null);
					} else {
						setActiveIndex(i);
					}
				};

				const isOpen = i === activeIndex;

				return (
					<NavItem
						handleOpen={handleOpen}
						category={category}
						isOpen={isOpen}
						isAnyOpen={isAnyOpen}
						key={category.value}
					/>
				);
			})}
		</div>
	);
};

NavItems.displayName = "NavItems";

export default NavItems;
