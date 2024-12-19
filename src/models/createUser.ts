import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function createUser(id:string){
    try{
        const result = await prisma.user.create({data:{id}})
        if(result){
            return {code:200, msg:"Usuário criado com sucesso"}
        }else{
            return {code:500, msg:"Erro interno no servidor"}
        }
    }catch(err){
        return {code:500, msg:"Erro interno no servidor"}
    }
}