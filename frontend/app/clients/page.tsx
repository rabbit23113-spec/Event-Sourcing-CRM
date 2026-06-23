"use client"

import AsideLayoutComponent from "@/app/layout/AsideLayoutComponent";
import ClientComponent from "@/app/components/clients/ClientComponent";

const ClientsPage = () => {
    return (
        <div className={"min-h-screen w-full justify-center items-center flex flex-col gap-6"}>
            <div className={"grid gap-6 grid-cols-4"}>
                <ClientComponent
                    name="Иван Петров"
                    status="ACTIVE"
                    email="ivan.petrov@example.com"
                    phone="+7 (999) 123-45-67"
                    ownerId="550e8400-e29b-41d4-a716-446655440101"
                    companyName="Acme Solutions"
                    createdAt={new Date("2026-06-10T09:15:00Z")}
                    updatedAt={new Date("2026-06-22T14:30:00Z")}
                />

                <ClientComponent
                    name="Анна Смирнова"
                    status="ACTIVE"
                    email="anna.smirnova@example.com"
                    phone="+7 (999) 234-56-78"
                    ownerId="550e8400-e29b-41d4-a716-446655440102"
                    companyName="TechNova"
                    createdAt={new Date("2026-06-08T11:20:00Z")}
                    updatedAt={new Date("2026-06-20T16:40:00Z")}
                />

                <ClientComponent
                    name="Дмитрий Козлов"
                    status="INACTIVE"
                    email="dmitry.kozlov@example.com"
                    phone="+7 (999) 345-67-89"
                    ownerId="550e8400-e29b-41d4-a716-446655440103"
                    companyName="CloudWare"
                    createdAt={new Date("2026-05-29T13:40:00Z")}
                    updatedAt={new Date("2026-06-12T10:15:00Z")}
                />

                <ClientComponent
                    name="Елена Васильева"
                    status="ACTIVE"
                    email="elena.v@example.com"
                    phone="+7 (999) 456-78-90"
                    ownerId="550e8400-e29b-41d4-a716-446655440104"
                    companyName="FinCore"
                    createdAt={new Date("2026-06-02T10:10:00Z")}
                    updatedAt={new Date("2026-06-23T09:20:00Z")}
                />

                <ClientComponent
                    name="Алексей Орлов"
                    status="ACTIVE"
                    email="alex.orlov@example.com"
                    phone="+7 (999) 567-89-01"
                    ownerId="550e8400-e29b-41d4-a716-446655440105"
                    companyName="LogiSoft"
                    createdAt={new Date("2026-05-20T08:30:00Z")}
                    updatedAt={new Date("2026-06-21T12:50:00Z")}
                />

                <ClientComponent
                    name="Мария Соколова"
                    status="SUSPENDED"
                    email="maria.sokolova@example.com"
                    phone="+7 (999) 678-90-12"
                    ownerId="550e8400-e29b-41d4-a716-446655440106"
                    companyName="Retail Group"
                    createdAt={new Date("2026-04-18T15:45:00Z")}
                    updatedAt={new Date("2026-06-05T11:10:00Z")}
                />

                <ClientComponent
                    name="Сергей Морозов"
                    status="ACTIVE"
                    email="sergey.morozov@example.com"
                    phone="+7 (999) 789-01-23"
                    ownerId="550e8400-e29b-41d4-a716-446655440107"
                    companyName="DataSphere"
                    createdAt={new Date("2026-06-14T09:00:00Z")}
                    updatedAt={new Date("2026-06-22T18:10:00Z")}
                />

                <ClientComponent
                    name="Ольга Николаева"
                    status="ACTIVE"
                    email="olga.nikolaeva@example.com"
                    phone="+7 (999) 890-12-34"
                    ownerId="550e8400-e29b-41d4-a716-446655440108"
                    companyName="Vision Labs"
                    createdAt={new Date("2026-06-17T16:20:00Z")}
                    updatedAt={new Date("2026-06-23T08:55:00Z")}
                />
            </div>
            <AsideLayoutComponent />
        </div>
    )
}

export default ClientsPage;