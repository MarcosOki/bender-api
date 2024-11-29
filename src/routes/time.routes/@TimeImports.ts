import { FastifyInstance } from "fastify"
import { addedTime } from "./addedTime"
import { getTime } from "./getTime"

export const timeImports = (app:FastifyInstance) => {
    app.register(addedTime)
    app.register(getTime)
}