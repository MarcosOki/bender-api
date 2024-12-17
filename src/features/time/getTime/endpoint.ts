import { PrismaClient } from "@prisma/client";
import {FastifyReply, FastifyRequest } from "fastify";
import getTime from "../../../models/getTime"

const prisma = new PrismaClient()
interface Params{
    id:string
}
interface Response {
    code:number,
    msg:string,
    data?:object
}
export default async function endpoint(req:FastifyRequest<{Params:Params}>, res:FastifyReply){
    const id = req.params.id
    try{
        const result : Response = await getTime(id)
        if(result.code == 200){
            return res.code(200).send(result.data)
        }else if(result.code == 404){
            return res.code(404).send(result)
        }
    }catch(err){
        return console.log(err)
    }
}