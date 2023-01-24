import prismaClient from "../../prisma";

interface PostRequest {
    post_id: string
}

class RemovePostService {
    async execute({ post_id }: PostRequest) {
        const post = await prismaClient.post.delete({
            where: {
                id: post_id
            }
        });

        return post
    }
}

export { RemovePostService }