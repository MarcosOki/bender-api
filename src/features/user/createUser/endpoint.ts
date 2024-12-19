import { FastifyReply, FastifyRequest } from "fastify";
import createUser from "../../../models/createUser"

interface Body{
    id:string
}
export default async function endpoint(req:FastifyRequest<{Body:Body}>, res:FastifyReply){
    const id = req.body.id
    try{
        const result = await createUser(id)
        if(result.code == 200){
            return res.code(result.code).send(result.msg)
        }else{
            return res.code(result.code).send(result.msg)
        }
    }catch(err){
        return res.code(500).send({msg:"Erro interno no servidor"})
    }
}