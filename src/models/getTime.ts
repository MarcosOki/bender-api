import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Response {
    code: number;
    msg: string;
    data?:object
}

export default async function getTime(id: string) {
    try {
        const response = await prisma.timeUser.findUnique({
            where: { id },
        });

        if (response === null) {
            return { code: 404, msg: "Usuário não encontrado"};
        } else {
            return { code: 200, msg: "Usuário encontrado", data:response };
        }
    } catch (err) {
        console.error(err);
        return { code: 500, msg: "Ocorreu um erro ao tentar procurar o usuário" };
    }
}
