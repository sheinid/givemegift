import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useAuth = () => {
	const router = useRouter();

	const signOut = async () => {
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`,
				{
					method: "POST",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (!res.ok) throw new Error();

			toast.success("Вы вышли из аккаунта.");
			router.push("/login");
			router.refresh();
		} catch (e) {
			toast.error("Что-то пошло не так, попробуйте ещё раз.");
		}
	};

	return { signOut };
};
