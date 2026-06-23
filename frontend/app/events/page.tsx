import AsideLayoutComponent from "@/app/layout/AsideLayoutComponent";
import EventComponent from "@/app/components/events/EventComponent";

const EventsPage = () => {
    return (
        <div className={"min-h-screen w-full justify-center items-center flex flex-col gap-8 pt-24 pb-24 relative"}>
            <div className={"flex flex-col gap-6"}>
                <EventComponent
                    domain="DEAL"
                    action="CREATED"
                    actorId="550e8400-e29b-41d4-a716-446655440101"
                    subjectId="550e8400-e29b-41d4-a716-446655440001"
                    createdAt={new Date("2026-06-18T09:15:00Z")}
                />

                <EventComponent
                    domain="TASK"
                    action="COMPLETED"
                    actorId="550e8400-e29b-41d4-a716-446655440102"
                    subjectId="550e8400-e29b-41d4-a716-446655440201"
                    createdAt={new Date("2026-06-18T11:42:00Z")}
                />

                <EventComponent
                    domain="CLIENT"
                    action="CREATED"
                    actorId="550e8400-e29b-41d4-a716-446655440103"
                    subjectId="550e8400-e29b-41d4-a716-446655440301"
                    createdAt={new Date("2026-06-19T08:20:00Z")}
                />

                <EventComponent
                    domain="DEAL"
                    action="STATUS_CHANGED"
                    actorId="550e8400-e29b-41d4-a716-446655440104"
                    subjectId="550e8400-e29b-41d4-a716-446655440004"
                    createdAt={new Date("2026-06-19T14:55:00Z")}
                />

                <EventComponent
                    domain="PROJECT"
                    action="CREATED"
                    actorId="550e8400-e29b-41d4-a716-446655440105"
                    subjectId="550e8400-e29b-41d4-a716-446655440401"
                    createdAt={new Date("2026-06-20T10:05:00Z")}
                />

                <EventComponent
                    domain="TASK"
                    action="ASSIGNED"
                    actorId="550e8400-e29b-41d4-a716-446655440106"
                    subjectId="550e8400-e29b-41d4-a716-446655440202"
                    createdAt={new Date("2026-06-21T09:30:00Z")}
                />

                <EventComponent
                    domain="USER"
                    action="LOGIN"
                    actorId="550e8400-e29b-41d4-a716-446655440107"
                    subjectId="550e8400-e29b-41d4-a716-446655440107"
                    createdAt={new Date("2026-06-22T08:01:00Z")}
                />

                <EventComponent
                    domain="DEAL"
                    action="WON"
                    actorId="550e8400-e29b-41d4-a716-446655440108"
                    subjectId="550e8400-e29b-41d4-a716-446655440003"
                    createdAt={new Date("2026-06-23T15:18:00Z")}
                />
            </div>
            <AsideLayoutComponent />
        </div>
    )
}

export default EventsPage;