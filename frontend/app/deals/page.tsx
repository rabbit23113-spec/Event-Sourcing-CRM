import Deal from "@/app/components/deals/DealComponent";
import CustomButton from "@/app/components/misc/CustomButtonComponent";

const DealsPage = () => {
    return (
        <div className={"min-h-screen w-full justify-center items-center flex flex-col gap-6"}>
            <div className={"grid gap-6 grid-cols-4"}>
                <Deal title={"Заказ оборудования"} value={2000000} status={"Новый"} clientId={"reconquista@yandex.ru"}
                      ownerId={"Timofey Stepanov"}
                      createdAt={new Date()} updatedAt={new Date()}/>
                <Deal title={"Заказ оборудования"} value={2000000} status={"Новый"} clientId={"reconquista@yandex.ru"}
                      ownerId={"Timofey Stepanov"}
                      createdAt={new Date()} updatedAt={new Date()}/>
                <Deal title={"Заказ оборудования"} value={2000000} status={"Новый"} clientId={"reconquista@yandex.ru"}
                      ownerId={"Timofey Stepanov"}
                      createdAt={new Date()} updatedAt={new Date()}/>
                <Deal title={"Заказ оборудования"} value={2000000} status={"Новый"} clientId={"reconquista@yandex.ru"}
                      ownerId={"Timofey Stepanov"}
                      createdAt={new Date()} updatedAt={new Date()}/>
                <Deal title={"Заказ оборудования"} value={2000000} status={"Новый"} clientId={"reconquista@yandex.ru"}
                      ownerId={"Timofey Stepanov"}
                      createdAt={new Date()} updatedAt={new Date()}/>
                <Deal title={"Заказ оборудования"} value={2000000} status={"Новый"} clientId={"reconquista@yandex.ru"}
                      ownerId={"Timofey Stepanov"}
                      createdAt={new Date()} updatedAt={new Date()}/>
                <Deal title={"Заказ оборудования"} value={2000000} status={"Новый"} clientId={"reconquista@yandex.ru"}
                      ownerId={"Timofey Stepanov"}
                      createdAt={new Date()} updatedAt={new Date()}/>
                <Deal title={"Заказ оборудования"} value={2000000} status={"Новый"} clientId={"reconquista@yandex.ru"}
                      ownerId={"Timofey Stepanov"}
                      createdAt={new Date()} updatedAt={new Date()}/>
            </div>
        </div>
    )
}

export default DealsPage;