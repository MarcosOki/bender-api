import fastify, { FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors"
import { routes } from "./routes";

const app = fastify()

app.register(routes)
app.register(cors,{origin:"*", methods:["*"]})

app.listen({port:3000},(err,adress)=>{
    console.log(err ? err : adress)
})