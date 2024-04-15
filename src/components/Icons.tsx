import { cn } from "@/lib/utils";
import { Gift, LucideProps } from "lucide-react";

export const Icons = {
	logo: ({ className }: { className?: string }) => (
		<div
			className={cn(
				"w-6 h-6 rounded-full bg-primary inline-flex justify-center items-center",
				className
			)}
		>
			<Gift className="text-white w-1/2 h-1/2" />
		</div>
	),
};
