import prismaClient from "../../prisma";

interface OrderRequest {
    table: number;
    name?: string;
}

class CreateOrderService {
    async execute({table, name}: OrderRequest){

        if(!table){
            throw new Error("Insira o número da mesa")
        }

        const alreadyOrder = await prismaClient.order.findFirst({ where: { table: table } })

        if(alreadyOrder){
            throw new Error("Essa mesa já está aberta")
        }

        const createOrder = await prismaClient.order.create({
            data: {
                table,
                name
            }
        })

        return createOrder
    }
}

export { CreateOrderService }