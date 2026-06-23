import CustomButton from "@/app/components/misc/CustomButtonComponent";

export const TaskComponent = (props: {
    title: string,
    description: string,
    priority: string,
    assignee_id: string,
    dueDate: Date,
    createdAt: Date;
    updatedAt: Date;
}) => {
    return (
        <div
            className={"p-3 w-100 bg-card text-foreground border border-border rounded-md flex gap-6 flex-col hover:bg-card-hover"}>
            <div className={"flex justify-between items-center gap-4"}>
                <div className={"text-2xl"}>{props.title}</div>
                <div className={"p-2.5 bg-primary text-card rounded-md"}>{props.priority}</div>
            </div>
            <div className={"grid gap-3 grid-cols-2"}>
                <div className={"flex flex-col gap-1"}>
                    <div className={"font-medium"}>Ответственный</div>
                    <div className={"text-sm text-foreground-secondary"}>{props.assignee_id}</div>
                </div>
                <div className={"flex flex-col gap-1"}>
                    <div className={"font-medium"}>Крайний срок</div>
                    <div className={"text-sm text-foreground-secondary"}>{props.dueDate.toLocaleString()}</div>
                </div>
            </div>
        </div>
    )
}