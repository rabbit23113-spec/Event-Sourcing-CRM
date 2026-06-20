export const HeaderNavigationComponent = () => {
    return <nav className={"flex gap-6"}>
        <a className={"text-sm border-0 outline-0 font-medium font-roboto hover:text-foreground-secondary"}>
            Основное
        </a>
        <a className={"text-sm border-0 outline-0 font-medium font-roboto hover:text-foreground-secondary"}>
            Коммерция
        </a>
        <a className={"text-sm border-0 outline-0 font-medium font-roboto hover:text-foreground-secondary"}>
            Задачи и аналитика
        </a>
    </nav>
}