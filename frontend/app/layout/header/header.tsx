"use client"

import HeaderNav from "@/app/components/header/HeaderNavigationComponent";
import CustomButton from "@/app/components/misc/button";
import Link from "next/link";

export const Header = () => {
    return (
        <header className={"w-full h-8 p-8 bg-card border-b border-border flex items-center justify-between top-0 fixed"}>
            <HeaderNav/>
            <Link href="/signup">
                <CustomButton variant={"primary"}>Войти</CustomButton>
            </Link>
        </header>
    )
}