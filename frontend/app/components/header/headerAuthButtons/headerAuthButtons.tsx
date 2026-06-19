import CustomButton from "@/app/components/misc/button";
import Link from "next/link";

export const HeaderAuthButtons = () => {
    return <div className={"flex gap-3"}>
        <Link href="/signup">
            <CustomButton variant={"primary"}>Регистрация</CustomButton>
        </Link>
        <Link href="/signin">
            <CustomButton variant={"outline"}>Вход</CustomButton>
        </Link>
    </div>
}