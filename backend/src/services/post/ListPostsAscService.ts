import prismaClient from "../../prisma";


class ListPostsAscService{
    async excutee(){
        const posts = await prismaClient.post.findMany({
            orderBy: {
                createdAt: 'asc'
            }
        })

        return posts
    }
}

export {ListPostsAscService}