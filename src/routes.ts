import { FastifyInstance } from "fastify";
import { timeImports } from "./routes/time.routes/@TimeImports";

export const routes = (app:FastifyInstance) =>{
    app.register(timeImports)
}