import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface Params{
    id:string,
    xp:number,
}
export const addedXpMessages = (app:FastifyInstance)=>{
    app.put("/xp/:id/:xp",async (req:FastifyRequest<{Params:Params}>,res:FastifyReply )=>{
        const id = req.params.id
        const xp = req.params.xp
        const oldXp:number = await prisma.xp.findUnique({where:{id}}).then((res)=>{
            return res?.xpMessages
        }).catch((err)=>{
            return err
        })
        const somaXp = Number(xp) + Number(oldXp)
        const response = await prisma.user.update({
            where:{id},
           data:{xp:{update:{xpMessages:Number(somaXp)}}}
        }).then((response)=>{
            if(response != null){
                return res.status(200).send({msg:"xp adicionado", data:somaXp})
            }else{
                return res.status(400).send({err:"Erro ao adicionar xp"})
            }
        }).catch((err)=>{
            return res.status(400).send({err:"Erro ao adicionar xp"})
        })
    })
}