"use client";

import { User } from "@/payload-types";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

interface UserAccountDropdownProps {
	user: User;
}

const UserAccountDropdown = ({ user }: UserAccountDropdownProps) => {
	const { signOut } = useAuth();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="overflow-visible" asChild>
				<Button variant="ghost" size="sm" className="relative">
					Мой аккаунт
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="bg-white w-60" align="center">
				<div className="flex items-center justify-start gap-2 p-2">
					<div className="flex flex-col space-y-0.5 leading-none">
						<p className="font-medium text-sm text-black">
							{user.email}
						</p>
					</div>
				</div>

				<DropdownMenuSeparator />

				<DropdownMenuItem asChild>
					<Link href="/sell">Панель продавца</Link>
				</DropdownMenuItem>

				<DropdownMenuItem
					onClick={signOut}
					className="cursor-pointer flex gap-2"
				>
					Выйти <LogOut className="w-3 h-3" />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

UserAccountDropdown.displayName = "UserAccountDropdown";

export default UserAccountDropdown;
