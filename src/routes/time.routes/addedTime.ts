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
        const userExist = await prisma.user.findUnique({
            where:{id}
        }).then((response)=>{
            if(response == null){
                const createUser = prisma.user.create({
                    data:{id,timeUser:{create:{time}}}
                }).then((response)=>{
                    res.status(200).send({msg:"usuário criado", user: response})
                    return response
                }).catch((err)=>{
                    console.log(err)
                    return {"msg":"Erro ao criar usuário"}
                })
                return createUser
            }else{
                const getOldTime = prisma.timeUser.findUnique({
                    where:{idUser:id}}).then((response)=>{
                        console.log("Usuário encontrado")
                        return response?.time
                    }).catch((err)=>{
                        console.log("Usuário não encontrado")
                        return {"msg":"Erro ao buscar usuário"}
                    })

                const updateTime = prisma.user.update({
                    where:{id},
                    data:{timeUser:{update: {time: time+oldTime}}}
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