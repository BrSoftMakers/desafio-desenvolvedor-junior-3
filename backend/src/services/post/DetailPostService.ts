import prismaClient from "../../prisma";

interface DetailRequest {
    post_id: string
}


class DetailPostService {
    async execute({ post_id }: DetailRequest) {
        const post = await prismaClient.post.findMany({
            where: {
                id: post_id
            },
            include: {
                author: true
            }
        })

        return post
    }
}

export { DetailPostService }