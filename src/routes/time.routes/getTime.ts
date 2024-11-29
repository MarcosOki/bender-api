import { PrismaClient } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

const prisma = new PrismaClient()
interface Params{
    id:string
}

export const getTime = (app:FastifyInstance)=>{
    app.get("/usertime/:id", async (req:FastifyRequest<{Params:Params}>, res:FastifyReply)=>{
        const id = req.params.id
        const user = await prisma.timeUser.findUnique({
            where:{id},
        }).then((user)=>{
            if(user){
                return res.status(200).send({id:user.id, time:user.time})
            }else{
                return res.status(400).send("Usuário nao encontrado")
            }
        }).catch((err)=>{
            return res.status(400).send("Erro ao buscar usuário")
        })
    })
}