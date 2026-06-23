export const EventComponent = (props: {
    domain: string;
    action: string;
    actorId: string;
    subjectId: string;
    createdAt: Date;
}) => {
    return (
        <div className={"rounded-md p-8 w-260 text-foreground flex items-center justify-evenly bg-card hover:bg-card-hover"}>
            <div className={"flex flex-col gap-1 items-start justify-center"}>
                <div className={"font-medium"}>Домен</div>
                <div className={"text-sm"}>{props.domain}</div>
            </div>
            <div className={"flex flex-col gap-1 items-start justify-center"}>
                <div className={"font-medium"}>Действие</div>
                <div className={"text-sm text-primary"}>{props.action}</div>
            </div>
            <div className={"flex flex-col gap-1 items-start justify-center"}>
                <div className={"font-medium"}>Совершил</div>
                <div className={"text-sm"}>{props.actorId}</div>
            </div>
            <div className={"flex flex-col gap-1 items-start justify-center"}>
                <div className={"font-medium"}>Субъект</div>
                <div className={"text-sm"}>{props.subjectId}</div>
            </div>
            <div className={"flex flex-col gap-1 items-start justify-center"}>
                <div className={"font-medium"}>Дата</div>
                <div className={"text-sm"}>{props.createdAt.toLocaleString()}</div>
            </div>
        </div>
    )
}