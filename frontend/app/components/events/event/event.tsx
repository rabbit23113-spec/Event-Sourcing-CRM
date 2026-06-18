export const EventComponent = (props: {
    domain: string;
    action: string;
    actorId: string;
    subjectId: string;
    createdAt: Date;
}) => {
    return (
        <div className={"px-5 py-2.5 w-7xl text-foreground flex items-center justify-between shadow-sm"}>
            <div className={"flex flex-col gap-1"}>
                <div className={"font-medium"}>Домен</div>
                <div className={"text-sm"}>{props.domain}</div>
            </div>
            <div className={"flex flex-col gap-1"}>
                <div className={"font-medium"}>Действие</div>
                <div className={"text-sm p-1 bg-success rounded-md text-card"}>{props.action}</div>
            </div>
            <div className={"flex flex-col gap-1"}>
                <div className={"font-medium"}>Совершил</div>
                <div className={"text-sm"}>{props.actorId}</div>
            </div>
            <div className={"flex flex-col gap-1"}>
                <div className={"font-medium"}>Субъект</div>
                <div className={"text-sm"}>{props.subjectId}</div>
            </div>
            <div className={"flex flex-col gap-1"}>
                <div className={"font-medium"}>Дата</div>
                <div className={"text-sm"}>{props.createdAt.toLocaleString()}</div>
            </div>
        </div>
    )
}