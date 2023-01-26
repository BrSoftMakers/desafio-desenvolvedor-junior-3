import prismaClient from "../../prisma";


class ListPostsDescService{
    async excutee(){
        const posts = await prismaClient.post.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return posts
    }
}

export {ListPostsDescService}