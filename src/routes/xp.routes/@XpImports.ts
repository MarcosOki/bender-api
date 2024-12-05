import { FastifyInstance } from "fastify";
import { getXp } from "./getXp";
import { addedXpMessages } from "./addedXpMessages";

export const xpImports = (app:FastifyInstance) => {
    app.register(getXp)
    app.register(addedXpMessages)
}