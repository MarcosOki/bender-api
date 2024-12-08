import fastify, { FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors"
import { routes } from "./routes";

const app = fastify()

app.register(routes)
app.register(cors,{origin:"*", methods:["*"]})

app.listen({host:"0.0.0.0",port:process.env.PORT ? Number(process.env.PORT) : 3000 },(err,adress)=>{
    console.log("Server Running !!!")
    console.log(err ? err : adress)
})