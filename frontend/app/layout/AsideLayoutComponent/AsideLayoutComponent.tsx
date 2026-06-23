import Link from "next/link";

export const AsideLayoutComponent = () => {
    return (
        <div className={"w-max min-h-full flex flex-col justify-evenly p-4 bg-card border border-border fixed top-0 left-0"}>
            <div className={"flex flex-col gap-2"}>
                <div>Главная</div>
                <div className={"flex flex-col gap-1"}>
                    <Link href={"/dashboard"} className={"text-sm font-medium"}>Рабочий стол</Link>
                    <Link href={"/tasks"} className={"text-sm font-medium"}>Задачи</Link>
                    <Link href={"/events"} className={"text-sm font-medium"}>Журнал аудита</Link>
                </div>
            </div>
            <div className={"flex flex-col gap-2"}>
                <div>Бизнес</div>
                <div className={"flex flex-col gap-1"}>
                    <Link href={"/leads"} className={"text-sm font-medium"}>Лиды</Link>
                    <Link href={"/clients"} className={"text-sm font-medium"}>Клиенты</Link>
                    <Link href={"/deals"} className={"text-sm font-medium"}>Сделки</Link>
                </div>
            </div>
            <div className={"flex flex-col gap-2"}>
                <div>Прочее</div>
                <div className={"flex flex-col gap-1"}>
                    <Link href={"/settings"} className={"text-sm font-medium"}>Персонализация</Link>
                    <Link href={"/"} className={"text-sm font-medium text-error"}>Выйти</Link>
                </div>
            </div>
        </div>
    )
}