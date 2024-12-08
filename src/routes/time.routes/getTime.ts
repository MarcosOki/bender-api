import { PrismaClient } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";


const prisma = new PrismaClient()
interface Params{
    id:string
}

export const getTime = (app:FastifyInstance)=>{
    app.get("/usertime/:id", async (req:FastifyRequest<{Params:Params}>, res:FastifyReply)=>{
        console.log("chegou")
        const id = req.params.id
        const response = await prisma.user.findUnique({
            where:{id}
        }).then(async (response)=>{
            if(response == null){
                return res.status(400).send({msg:"usuário não encontrado"})
            }else{
                const time = await prisma.timeUser.findUnique({where:{id}}).then((res)=>{return res?res.time: Error}).catch((err)=>{return err})
                return res.status(200).send({time})
            }
        }).catch((err)=>{
            return res.status(400).send({msg:"erro ao buscar usuário"})
        })
    })
}