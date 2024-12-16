import fastify, { FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors"
import getTime from "./features/time/getTime/route"
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import addTime from "./features/time/addTime/route";

const app = fastify()

app.register(cors,{origin:"*", methods:["*"]})

async function startServer() {
    await app.register(fastifySwagger, {
        swagger: {
            info: {
                title: "API Documentation",
                description: "API para obter informações de tempo",
                version: "1.0.0",
            },
        },
    });
    
    await app.register(fastifySwaggerUi, {
        routePrefix: "/docs",
        staticCSP: true,
    });

    app.route(getTime)
    app.route(addTime)
    
    app.listen({host:"0.0.0.0",port:process.env.PORT ? Number(process.env.PORT) : 3000 },(err,adress)=>{
        console.log("Server Running !!!")
        console.log(err ? err : adress)
    })
}

startServer()