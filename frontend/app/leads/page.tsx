import AsideLayoutComponent from "@/app/layout/AsideLayoutComponent";
import LeadComponent from "@/app/components/leads/LeadComponent";

const LeadsPage = () => {
    return (
        <div className={"min-h-screen w-full justify-center items-center flex flex-col gap-8"}>
            <div className={"grid gap-6 grid-cols-4"}>
                <LeadComponent
                    name="Иван Петров"
                    status="NEW"
                    email="ivan.petrov@example.com"
                    phone="+7 (999) 123-45-67"
                    ownerId="550e8400-e29b-41d4-a716-446655440101"
                    source="Website"
                    createdAt={new Date("2026-06-18T09:15:00Z")}
                    updatedAt={new Date("2026-06-18T09:15:00Z")}
                />

                <LeadComponent
                    name="Анна Смирнова"
                    status="CONTACTED"
                    email="anna.smirnova@example.com"
                    phone="+7 (999) 234-56-78"
                    ownerId="550e8400-e29b-41d4-a716-446655440102"
                    source="Referral"
                    createdAt={new Date("2026-06-19T10:40:00Z")}
                    updatedAt={new Date("2026-06-20T14:10:00Z")}
                />

                <LeadComponent
                    name="Дмитрий Козлов"
                    status="QUALIFIED"
                    email="d.kozlov@example.com"
                    phone="+7 (999) 345-67-89"
                    ownerId="550e8400-e29b-41d4-a716-446655440103"
                    source="LinkedIn"
                    createdAt={new Date("2026-06-20T08:30:00Z")}
                    updatedAt={new Date("2026-06-21T09:45:00Z")}
                />

                <LeadComponent
                    name="Елена Васильева"
                    status="PROPOSAL"
                    email="elena.v@example.com"
                    phone="+7 (999) 456-78-90"
                    ownerId="550e8400-e29b-41d4-a716-446655440104"
                    source="Google Ads"
                    createdAt={new Date("2026-06-16T13:20:00Z")}
                    updatedAt={new Date("2026-06-22T16:00:00Z")}
                />

                <LeadComponent
                    name="Алексей Орлов"
                    status="CONVERTED"
                    email="alex.orlov@example.com"
                    phone="+7 (999) 567-89-01"
                    ownerId="550e8400-e29b-41d4-a716-446655440105"
                    source="Conference"
                    createdAt={new Date("2026-06-15T11:00:00Z")}
                    updatedAt={new Date("2026-06-23T10:15:00Z")}
                />

                <LeadComponent
                    name="Мария Соколова"
                    status="LOST"
                    email="m.sokolova@example.com"
                    phone="+7 (999) 678-90-12"
                    ownerId="550e8400-e29b-41d4-a716-446655440106"
                    source="Cold Email"
                    createdAt={new Date("2026-06-12T15:30:00Z")}
                    updatedAt={new Date("2026-06-18T17:40:00Z")}
                />

                <LeadComponent
                    name="Сергей Морозов"
                    status="NEW"
                    email="sergey.morozov@example.com"
                    phone="+7 (999) 789-01-23"
                    ownerId="550e8400-e29b-41d4-a716-446655440107"
                    source="Telegram"
                    createdAt={new Date("2026-06-22T09:10:00Z")}
                    updatedAt={new Date("2026-06-22T09:10:00Z")}
                />

                <LeadComponent
                    name="Ольга Николаева"
                    status="CONTACTED"
                    email="olga.nikolaeva@example.com"
                    phone="+7 (999) 890-12-34"
                    ownerId="550e8400-e29b-41d4-a716-446655440108"
                    source="Website"
                    createdAt={new Date("2026-06-23T08:45:00Z")}
                    updatedAt={new Date("2026-06-23T12:30:00Z")}
                />
            </div>
            <AsideLayoutComponent />
        </div>
    )
}

export default LeadsPage;