import { PrismaClient } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";


const prisma = new PrismaClient()
interface Params{
    id:string
}

export const getTime = (app:FastifyInstance)=>{
    app.get("/usertime/:id", async (req:FastifyRequest<{Params:Params}>, res:FastifyReply)=>{
        const id = req.params.id
        const response = await prisma.user.findUnique({
            where:{id}
        }).then((response)=>{
            if(response == null){
                return res.status(400).send({msg:"usuário não encontrado"})
            }else{
                return res.status(200).send({response})
            }
        }).catch((err)=>{
            return res.status(400).send({msg:"erro ao buscar usuário"})
        })
    })
}