import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "@prisma/client";
import { routes } from "./routes";

const app = fastify({logger:true})

app.register(routes)

app.listen({port:3000},(err,adress)=>{
    console.log(err ? err : adress)
})