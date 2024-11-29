import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
interface Params{
    time:string
    id:string
}

export const addedTime = (app:FastifyInstance) => {
    app.put("/usertime/:id/:time", async (req:FastifyRequest<{Params:Params,Body:Body}>,res:FastifyReply)=>{
        const id = req.params.id
        const time = Number(req.params.time)
    
        const user = await prisma.timeUser.findUnique({
            where:{id},
        }).then(async (user)=>{
            if(user){
                const timeAdded = user.time + time
                await prisma.timeUser.update({
                    where:{id},
                    data:{
                        time:timeAdded
                    }
                }).then((response)=>{
                    return res.status(200).send({id:response.id, time:response.time})
                }).catch((err)=>{
                    return res.status(400).send("Erro ao adicionar tempo")
                })
            }
        })
        
    })
}