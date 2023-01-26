import prismaClient from "../../prisma";

interface PostRequest {
    user_id: string
}

class ListByUserService {
    async execute ({ user_id }: PostRequest ){

        const findByUser = await prismaClient.post.findMany({
            where: {
                authorId: user_id
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        return findByUser;

    }
}

export {ListByUserService}