import { FastifyInstance } from "fastify"
import { pingUtils } from "./pingUtils"

export const utilsImports = (app:FastifyInstance) => {
    app.register(pingUtils)
}   