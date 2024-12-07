import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export const pingUtils = (app:FastifyInstance)=>{
    app.get("/ping",(req:FastifyRequest,res:FastifyReply)=>{
        return res.status(200).send({msg:"Eitaaaa! Eu quase peguei no sono, obrigado por me chamar "})
    })
}