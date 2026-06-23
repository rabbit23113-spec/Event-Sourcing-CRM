"use client"

import {Line, LineChart, ResponsiveContainer, XAxis, YAxis} from "recharts";
import AsideLayoutComponent from "@/app/layout/AsideLayoutComponent";

const DashboardPage = () => {
    const data = [
        {name: 'Янв', сумма: 150000},
        {name: 'Февр', сумма: 200000},
        {name: 'Мар', сумма: 190000},
        {name: 'Апр', сумма: 210000},
        {name: 'Май', сумма: 220000},
        {name: 'Июн', сумма: 230000},
        {name: 'Июл', сумма: 185000},
        {name: 'Авг', сумма: 300000},
        {name: 'Сен', сумма: 280000},
        {name: 'Окт', сумма: 260000},
        {name: 'Ноя', сумма: 310000},
        {name: 'Дек', сумма: 330000},
    ];
    return (
        <div className={"min-h-screen w-full justify-between items-center flex flex-col"}>
            <div className={"p-8 flex flex-col justify-center h-full gap-12"}>
                <div className={"w-full gap-4 grid grid-cols-6"}>
                    <div className={"flex justify-between bg-card w-60 h-60 p-4 shadow-sm rounded-md flex-col"}>
                        <div className={"font-medium text-xl"}>Новых задач за сегодня</div>
                        <div className={"w-full flex justify-end text-2xl font-bold"}>12</div>
                    </div>
                    <div className={"flex justify-between bg-card w-60 h-60 p-4 shadow-sm rounded-md flex-col"}>
                        <div className={"font-medium text-xl"}>Активных клиентов</div>
                        <div className={"w-full flex justify-end text-2xl font-bold"}>48</div>
                    </div>
                    <div className={"flex justify-between bg-card w-60 h-60 p-4 shadow-sm rounded-md flex-col"}>
                        <div className={"font-medium text-xl"}>Открытых сделок</div>
                        <div className={"w-full flex justify-end text-2xl font-bold"}>6</div>
                    </div>
                    <div className={"flex justify-between bg-card w-60 h-60 p-4 shadow-sm rounded-md flex-col"}>
                        <div className={"font-medium text-xl"}>Сумма открытых сделок</div>
                        <div className={"w-full flex justify-end text-2xl font-bold"}>4.643.000 ₽</div>
                    </div>
                    <div className={"flex justify-between bg-card w-60 h-60 p-4 shadow-sm rounded-md flex-col"}>
                        <div className={"font-medium text-xl"}>Конверсия лид → клиент</div>
                        <div className={"w-full flex justify-end text-2xl font-bold"}>39%</div>
                    </div>
                    <div className={"flex justify-between bg-card w-60 h-60 p-4 shadow-sm rounded-md flex-col"}>
                        <div className={"font-medium text-xl"}>Выручка за неделю</div>
                        <div className={"w-full flex justify-end text-2xl font-bold"}>1.289.000 ₽</div>
                    </div>
                    <div className={"flex justify-between bg-card w-60 h-60 p-4 shadow-sm rounded-md flex-col"}>
                        <div className={"font-medium text-xl"}>Сотрудников онлайн</div>
                        <div className={"w-full flex justify-end text-2xl font-bold"}>7</div>
                    </div>
                    <div className={"flex justify-between bg-card w-60 h-60 p-4 shadow-sm rounded-md flex-col"}>
                        <div className={"font-medium text-xl"}>Задач в работе</div>
                        <div className={"w-full flex justify-end text-2xl font-bold"}>17</div>
                    </div>
                    <div className={"flex justify-between bg-card w-60 h-60 p-4 shadow-sm rounded-md flex-col"}>
                        <div className={"font-medium text-xl"}>Среднее время выполнения задачи</div>
                        <div className={"w-full flex justify-end text-2xl font-bold"}>18.4 часа</div>
                    </div>
                    <div className={"flex justify-between bg-card w-60 h-60 p-4 shadow-sm rounded-md flex-col"}>
                        <div className={"font-medium text-xl"}>Активные сделки</div>
                        <div className={"w-full flex justify-end text-2xl font-bold"}>17</div>
                    </div>
                    <div className={"flex justify-between w-60 h-60 p-4 bg-error text-foreground rounded-md flex-col"}>
                        <div className={"font-medium text-xl"}>Просроченных задач</div>
                        <div className={"w-full flex justify-end text-2xl font-bold"}>2</div>
                    </div>
                    <div
                        className={"flex justify-between w-60 h-60 p-4 text-foreground bg-success shadow-sm rounded-md flex-col"}>
                        <div className={"font-medium text-xl"}>Выполненных задач</div>
                        <div className={"w-full flex justify-end text-2xl font-bold"}>4</div>
                    </div>
                </div>
                <div className={"flex flex-col gap-4"}>
                    <div className={"font-medium text-2xl"}>График выручки по месяцам</div>
                    <div className="h-70">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Line type="monotone" dataKey="сумма" stroke="#8884d8"/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <AsideLayoutComponent/>
        </div>
    )
}

export default DashboardPage;