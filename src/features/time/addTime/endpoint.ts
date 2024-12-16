import { PrismaClient } from "@prisma/client";
import {FastifyReply, FastifyRequest } from "fastify";
import addTime from "../../../models/addTime";

const prisma = new PrismaClient()
interface Params{
    id:string
    time:string
}

export default async function endpoint(req:FastifyRequest<{Params:Params}>, res:FastifyReply){
    const id = req.params.id
    const time = req.params.time
    try{
        const result = await addTime(id,time)
        console.log(result)
        if(result.code == 200){
            return res.code(result.code).send(result.msg)
        }else if(result.code == 400){
            return res.code(result.code).send(result.msg)
        }else if(result.code == 500){
            return res.code(500).send(result.msg)
        }else{
            return res.code(501).send("Erro interno desconhecido")
        }
    }catch(error){
        console.log(error)
        return res.code(501).send("Erro interno desconhecido")
    }
}