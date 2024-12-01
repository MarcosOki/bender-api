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
        let oldTime = 0
        const userExist = await prisma.timeUser.findUnique({
            where:{id}
        }).then((response)=>{
            if(response == null){
                const createUser = prisma.timeUser.create({
                    data:{id,time}
                }).then((response)=>{
                    console.log("usuário criado", response)
                    return response
                }).catch((err)=>{
                    console.log(err)
                    return {"msg":"Erro ao criar usuário"}
                })
                return createUser
            }else{
                oldTime = response.time
                console.log("Usuário encontrado")
                const updateTime = prisma.timeUser.update({
                    where:{id},
                    data:{time:time+oldTime}
                }).then((response)=>{
                    console.log("Tempo atualizado", response)
                    return res.status(200).send(response)
                }).catch((err)=>{
                    console.log(err)
                    res.status(400).send({"msg":"Erro ao atualizar usuário"})
                })
            }
        }).catch((err)=>{
            console.log(err)
            return {"msg":"Erro ao buscar usuário"}
        })
})}