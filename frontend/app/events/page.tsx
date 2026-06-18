import EventComponent from "@/app/components/events/event";

const EventsPage = () => {
    return (
        <div className={"min-h-screen w-full justify-center items-center flex flex-col gap-8 pt-24 pb-24 relative"}>
            <div
                className={"w-full border-b border-border px-24 flex justify-between items-center h-18 top-0 absolute"}>
                <div>События</div>
                <img src={"/images/filter.svg"}/>
            </div>
            <div className={"flex flex-col gap-10"}>
                <EventComponent domain={"Сделка"} action={"Создание"} actorId={"Ivan Efimov"} subjectId={"Заказ оборудования"} createdAt={new Date()} />
                <EventComponent domain={"Сделка"} action={"Создание"} actorId={"Ivan Efimov"} subjectId={"Заказ оборудования"} createdAt={new Date()} />
                <EventComponent domain={"Сделка"} action={"Создание"} actorId={"Ivan Efimov"} subjectId={"Заказ оборудования"} createdAt={new Date()} />
                <EventComponent domain={"Сделка"} action={"Создание"} actorId={"Ivan Efimov"} subjectId={"Заказ оборудования"} createdAt={new Date()} />
                <EventComponent domain={"Сделка"} action={"Создание"} actorId={"Ivan Efimov"} subjectId={"Заказ оборудования"} createdAt={new Date()} />
                <EventComponent domain={"Сделка"} action={"Создание"} actorId={"Ivan Efimov"} subjectId={"Заказ оборудования"} createdAt={new Date()} />
                <EventComponent domain={"Сделка"} action={"Создание"} actorId={"Ivan Efimov"} subjectId={"Заказ оборудования"} createdAt={new Date()} />
                <EventComponent domain={"Сделка"} action={"Создание"} actorId={"Ivan Efimov"} subjectId={"Заказ оборудования"} createdAt={new Date()} />
                <EventComponent domain={"Сделка"} action={"Создание"} actorId={"Ivan Efimov"} subjectId={"Заказ оборудования"} createdAt={new Date()} />
                <EventComponent domain={"Сделка"} action={"Создание"} actorId={"Ivan Efimov"} subjectId={"Заказ оборудования"} createdAt={new Date()} />
            </div>
        </div>
    )
}

export default EventsPage;