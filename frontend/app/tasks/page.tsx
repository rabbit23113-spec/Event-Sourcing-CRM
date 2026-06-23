import AsideLayoutComponent from "@/app/layout/AsideLayoutComponent";
import TaskComponent from "@/app/components/tasks/TaskComponent";

const TasksPage = () => {
    return (
        <div className={"w-full min-h-screen flex justify-center items-center gap-4"}>
            <div
                className={"w-md h-screen flex flex-col justify-between p-5 items-center relative border-r border-border"}>
                <div
                    className={"absolute top-6 rounded-md p-2 bg-primary flex items-center justify-center text-card"}>Новые
                </div>
                <div className={"flex flex-col gap-6 p-15"}>
                    <TaskComponent
                        title="Подготовить коммерческое предложение"
                        description="Согласовать стоимость и отправить КП клиенту."
                        priority="HIGH"
                        assignee_id="550e8400-e29b-41d4-a716-446655440101"
                        dueDate={new Date("2026-06-25T18:00:00Z")}
                        createdAt={new Date("2026-06-22T09:15:00Z")}
                        updatedAt={new Date("2026-06-22T09:15:00Z")}
                    />

                    <TaskComponent
                        title="Созвон с потенциальным клиентом"
                        description="Обсудить требования к CRM и сроки внедрения."
                        priority="MEDIUM"
                        assignee_id="550e8400-e29b-41d4-a716-446655440102"
                        dueDate={new Date("2026-06-24T13:00:00Z")}
                        createdAt={new Date("2026-06-21T11:40:00Z")}
                        updatedAt={new Date("2026-06-22T15:10:00Z")}
                    />

                    <TaskComponent
                        title="Проверить интеграцию Stripe"
                        description="Убедиться, что платежи проходят корректно."
                        priority="HIGH"
                        assignee_id="550e8400-e29b-41d4-a716-446655440103"
                        dueDate={new Date("2026-06-26T17:00:00Z")}
                        createdAt={new Date("2026-06-20T08:30:00Z")}
                        updatedAt={new Date("2026-06-21T10:20:00Z")}
                    />
                </div>
            </div>
            <div
                className={"w-xl h-screen flex flex-col justify-between p-5 items-center relative border-r border-border"}>
                <div className={"absolute top-5 rounded-md p-2 bg-warning flex items-center justify-center text-card"}>В
                    процессе
                </div>
                <div className={"flex flex-col gap-5 p-15"}>
                    <TaskComponent
                        title="Обновить документацию API"
                        description="Добавить описание новых эндпоинтов."
                        priority="LOW"
                        assignee_id="550e8400-e29b-41d4-a716-446655440104"
                        dueDate={new Date("2026-06-30T18:00:00Z")}
                        createdAt={new Date("2026-06-19T14:10:00Z")}
                        updatedAt={new Date("2026-06-19T14:10:00Z")}
                    />

                    <TaskComponent
                        title="Исправить ошибку авторизации"
                        description="Устранить проблему с истечением JWT."
                        priority="URGENT"
                        assignee_id="550e8400-e29b-41d4-a716-446655440105"
                        dueDate={new Date("2026-06-24T10:00:00Z")}
                        createdAt={new Date("2026-06-23T08:00:00Z")}
                        updatedAt={new Date("2026-06-23T08:45:00Z")}
                    />

                    <TaskComponent
                        title="Провести код-ревью"
                        description="Проверить PR по модулю сделок."
                        priority="MEDIUM"
                        assignee_id="550e8400-e29b-41d4-a716-446655440106"
                        dueDate={new Date("2026-06-25T16:00:00Z")}
                        createdAt={new Date("2026-06-22T12:30:00Z")}
                        updatedAt={new Date("2026-06-22T18:20:00Z")}
                    />
                </div>
            </div>
            <div className={"w-md h-screen flex flex-col justify-between p-5 items-center relative"}>
                <div
                    className={"absolute top-5 rounded-md p-2 bg-success flex items-center justify-center text-card"}>Завершенные
                </div>
                <div className={"flex flex-col gap-5 p-15"}>
                    <TaskComponent
                        title="Настроить резервное копирование"
                        description="Добавить ежедневный backup PostgreSQL."
                        priority="HIGH"
                        assignee_id="550e8400-e29b-41d4-a716-446655440107"
                        dueDate={new Date("2026-06-27T12:00:00Z")}
                        createdAt={new Date("2026-06-18T10:50:00Z")}
                        updatedAt={new Date("2026-06-20T09:35:00Z")}
                    />

                    <TaskComponent
                        title="Подготовить отчет по продажам"
                        description="Сформировать статистику за текущий месяц."
                        priority="LOW"
                        assignee_id="550e8400-e29b-41d4-a716-446655440108"
                        dueDate={new Date("2026-06-28T18:00:00Z")}
                        createdAt={new Date("2026-06-21T16:10:00Z")}
                        updatedAt={new Date("2026-06-23T09:00:00Z")}
                    />
                </div>
            </div>
            <AsideLayoutComponent/>
        </div>
    )
}

export default TasksPage;