import { PrismaClient } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";


interface Paramns{
    id:string
}

const prisma = new PrismaClient()

export const getXp = (app:FastifyInstance) =>{
    app.get("/xp/:id", async (req:FastifyRequest<{Params:Paramns}>, res:FastifyReply)=>{
        const id = req.params.id
        let status = 400
        let xpTime = await prisma.timeUser.findUnique({where:{id}}).then((response)=>{return response?.time}).catch((err)=>{return err})
        const response  = await prisma.xp.findUnique({where:{id} }).then((response)=>{
            console.log(response)
            if(response == null){
                return res.send({err:"Usuário não encontrado no banco de dados"})
            }else{
                return res.status(200).send({xpTotal:response.xpMessages+xpTime,xpMessages:response.xpMessages, xpTime:xpTime})
            }
        }).catch((err)=>{
            return res.status(400).send({msg:"erro ao procurar usuário"})
        })
    })
}