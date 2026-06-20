import TaskComponent from "@/app/components/tasks/TaskComponent";

const TasksPage = () => {
    return (
        <div className={"w-full min-h-screen flex justify-between items-center"}>
            <div className={"w-full h-screen flex flex-col justify-between p-5 items-center relative border border-border"}>
                <div
                    className={"absolute top-6 rounded-md p-2 bg-primary flex items-center justify-center text-card"}>Новые
                </div>
                <div className={"flex flex-col gap-6 p-15"}>
                    <TaskComponent
                        title={"Разработать макет"}
                        description={""}
                        priority={"Высокий"}
                        assignee_id={"Stepan Efimov"} dueDate={new Date()}
                        createdAt={new Date()} updatedAt={new Date()}
                    />
                </div>
            </div>
            <div className={"w-full h-screen flex flex-col justify-between p-5 items-center relative border-r border-border"}>
                <div className={"absolute top-5 rounded-md p-2 bg-warning flex items-center justify-center text-card"}>В
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
            <div className={"w-full h-screen flex flex-col justify-between p-5 items-center relative"}>
                <div
                    className={"absolute top-5 rounded-md p-2 bg-success flex items-center justify-center text-card"}>Завершенные
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