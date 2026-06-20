import CustomButton from "@/app/components/misc/CustomButtonComponent";
import Client from "@/app/components/clients/ClientComponent";

const ClientsPage = () => {
    return (
        <div className={"min-h-screen w-full justify-center items-center flex flex-col gap-6"}>
            <div className={"grid gap-6 grid-cols-4"}>
                <Client name={"ООО Реконкиста"} status={"Новый"} email={"reconquista@yandex.ru"}
                      phone={"+7 900 123-45-67"} ownerId={"Timofey Stepanov"}
                      companyName={"ВКонтакте"} createdAt={new Date()} updatedAt={new Date()} />
                <Client name={"ООО Реконкиста"} status={"Новый"} email={"reconquista@yandex.ru"}
                      phone={"+7 900 123-45-67"} ownerId={"Timofey Stepanov"}
                      companyName={"ВКонтакте"} createdAt={new Date()} updatedAt={new Date()} />
                <Client name={"ООО Реконкиста"} status={"Новый"} email={"reconquista@yandex.ru"}
                      phone={"+7 900 123-45-67"} ownerId={"Timofey Stepanov"}
                      companyName={"ВКонтакте"} createdAt={new Date()} updatedAt={new Date()} />
                <Client name={"ООО Реконкиста"} status={"Новый"} email={"reconquista@yandex.ru"}
                      phone={"+7 900 123-45-67"} ownerId={"Timofey Stepanov"}
                      companyName={"ВКонтакте"} createdAt={new Date()} updatedAt={new Date()} />
                <Client name={"ООО Реконкиста"} status={"Новый"} email={"reconquista@yandex.ru"}
                      phone={"+7 900 123-45-67"} ownerId={"Timofey Stepanov"}
                      companyName={"ВКонтакте"} createdAt={new Date()} updatedAt={new Date()} />
                <Client name={"ООО Реконкиста"} status={"Новый"} email={"reconquista@yandex.ru"}
                      phone={"+7 900 123-45-67"} ownerId={"Timofey Stepanov"}
                      companyName={"ВКонтакте"} createdAt={new Date()} updatedAt={new Date()} />
                <Client name={"ООО Реконкиста"} status={"Новый"} email={"reconquista@yandex.ru"}
                      phone={"+7 900 123-45-67"} ownerId={"Timofey Stepanov"}
                      companyName={"ВКонтакте"} createdAt={new Date()} updatedAt={new Date()} />
                <Client name={"ООО Реконкиста"} status={"Новый"} email={"reconquista@yandex.ru"}
                      phone={"+7 900 123-45-67"} ownerId={"Timofey Stepanov"}
                      companyName={"ВКонтакте"} createdAt={new Date()} updatedAt={new Date()} />
            </div>
        </div>
    )
}

export default ClientsPage;