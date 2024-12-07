import { FastifyInstance } from "fastify";
import { timeImports } from "./routes/time.routes/@TimeImports";
import { utilsImports } from "./routes/utils.routes/@UtilsImports";
import { xpImports } from "./routes/xp.routes/@XpImports";

export const routes = (app:FastifyInstance) =>{
    app.register(timeImports)
    app.register(utilsImports)
    app.register(xpImports)
}