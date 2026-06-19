import TaskComponent from "@/app/components/tasks/task";

const TasksPage = () => {
    return (
        <div className={"w-full min-h-screen flex justify-between items-center"}>
            <div className={"w-150 h-screen flex flex-col justify-between p-5 items-center relative shadow-sm"}>
                <div
                    className={"absolute top-5 rounded-md p-2 bg-primary flex items-center justify-center text-card"}>Новые
                </div>
                <div className={"flex flex-col gap-5 p-15"}>
                    <TaskComponent
                        title={"Разработать макет"}
                        description={""}
                        priority={"Высокий"}
                        assignee_id={"Stepan Efimov"} dueDate={new Date()}
                        createdAt={new Date()} updatedAt={new Date()}
                    />
                </div>
            </div>
            <div className={"w-150 h-screen flex flex-col justify-between p-5 items-center relative shadow-sm"}>
                <div className={"absolute top-5 rounded-md p-2 bg-primary flex items-center justify-center text-card"}>В
                    процессе
                </div>
                <div className={"flex flex-col gap-5 p-15"}>
                    <TaskComponent
                        title={"Разработать макет"}
                        description={""}
                        priority={"Высокий"}
                        assignee_id={"Stepan Efimov"} dueDate={new Date()}
                        createdAt={new Date()} updatedAt={new Date()}
                    />
                </div>
            </div>
            <div className={"w-150 h-screen flex flex-col justify-between p-5 items-center relative shadow-sm"}>
                <div
                    className={"absolute top-5 rounded-md p-2 bg-primary flex items-center justify-center text-card"}>Завершенные
                </div>
                <div className={"flex flex-col gap-5 p-15"}>
                    <TaskComponent
                        title={"Разработать макет"}
                        description={""}
                        priority={"Высокий"}
                        assignee_id={"Stepan Efimov"} dueDate={new Date()}
                        createdAt={new Date()} updatedAt={new Date()}
                    />
                    <TaskComponent
                        title={"Разработать макет"}
                        description={""}
                        priority={"Высокий"}
                        assignee_id={"Stepan Efimov"} dueDate={new Date()}
                        createdAt={new Date()} updatedAt={new Date()}
                    />
                </div>
            </div>
        </div>
    )
}

export default TasksPage;