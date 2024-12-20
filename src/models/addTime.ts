import getTime from "./getTime";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface ResponseAddTime{
    code:number;
    msg:string;
    data?:object;
}

export default async function addTime(id:string,time:string){
    try {
        const oldTime = await getTime(id)
        console.log(oldTime)
        if(oldTime.code == 200){
            const result = await prisma.timeUser.update({where:{id},data:{time:Number(time)+Number(oldTime.data?.time)}})
            if(result != null){
                return {code:200, msg:"Tempo adicionado com sucesso", data:result}
            }else{
                return {code:500, msg:"Erro interno"}
            }
        }else{
            return {code:400, msg:"Usuário não encontrado"}
        }
    } catch (error) {
        return {code:500, msg:"Erro interno"}
    }
}