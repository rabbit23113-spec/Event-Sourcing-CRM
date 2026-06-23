import AsideLayoutComponent from "@/app/layout/AsideLayoutComponent";
import DealComponent from "@/app/components/deals/DealComponent";


const DealsPage = () => {
    return (
        <div className={"min-h-screen w-full justify-center items-center flex flex-col gap-6 my-4"}>
            <div className={"grid gap-6 grid-cols-3"}>
                <DealComponent
                    title="Разработка CRM для Acme"
                    value={245000}
                    status="IN_PROGRESS"
                    clientId="550e8400-e29b-41d4-a716-446655440001"
                    ownerId="550e8400-e29b-41d4-a716-446655440101"
                    createdAt={new Date("2026-06-18T09:15:00Z")}
                    updatedAt={new Date("2026-06-22T14:30:00Z")}
                />

                <DealComponent
                    title="Интеграция платежной системы"
                    value={98000}
                    status="NEW"
                    clientId="550e8400-e29b-41d4-a716-446655440002"
                    ownerId="550e8400-e29b-41d4-a716-446655440102"
                    createdAt={new Date("2026-06-21T11:40:00Z")}
                    updatedAt={new Date("2026-06-21T11:40:00Z")}
                />

                <DealComponent
                    title="Подключение аналитики"
                    value={67000}
                    status="WON"
                    clientId="550e8400-e29b-41d4-a716-446655440003"
                    ownerId="550e8400-e29b-41d4-a716-446655440103"
                    createdAt={new Date("2026-06-10T08:20:00Z")}
                    updatedAt={new Date("2026-06-20T16:05:00Z")}
                />

                <DealComponent
                    title="Автоматизация email-рассылок"
                    value={154000}
                    status="NEGOTIATION"
                    clientId="550e8400-e29b-41d4-a716-446655440004"
                    ownerId="550e8400-e29b-41d4-a716-446655440104"
                    createdAt={new Date("2026-06-17T13:10:00Z")}
                    updatedAt={new Date("2026-06-23T09:25:00Z")}
                />

                <DealComponent
                    title="Разработка мобильного приложения"
                    value={520000}
                    status="PROPOSAL"
                    clientId="550e8400-e29b-41d4-a716-446655440005"
                    ownerId="550e8400-e29b-41d4-a716-446655440105"
                    createdAt={new Date("2026-06-12T10:00:00Z")}
                    updatedAt={new Date("2026-06-19T15:45:00Z")}
                />

                <DealComponent
                    title="Миграция базы данных"
                    value={183000}
                    status="LOST"
                    clientId="550e8400-e29b-41d4-a716-446655440006"
                    ownerId="550e8400-e29b-41d4-a716-446655440106"
                    createdAt={new Date("2026-06-08T12:50:00Z")}
                    updatedAt={new Date("2026-06-16T17:30:00Z")}
                />

                <DealComponent
                    title="Внедрение SSO"
                    value={276000}
                    status="IN_PROGRESS"
                    clientId="550e8400-e29b-41d4-a716-446655440007"
                    ownerId="550e8400-e29b-41d4-a716-446655440107"
                    createdAt={new Date("2026-06-15T14:00:00Z")}
                    updatedAt={new Date("2026-06-22T18:20:00Z")}
                />

                <DealComponent
                    title="Технический аудит инфраструктуры"
                    value={89000}
                    status="NEW"
                    clientId="550e8400-e29b-41d4-a716-446655440008"
                    ownerId="550e8400-e29b-41d4-a716-446655440108"
                    createdAt={new Date("2026-06-23T08:35:00Z")}
                    updatedAt={new Date("2026-06-23T08:35:00Z")}
                />
            </div>
            <AsideLayoutComponent/>
        </div>
    )
}

export default DealsPage;