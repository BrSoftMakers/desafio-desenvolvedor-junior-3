import prismaClient from "../../prisma";

interface PostRequest{
    post_id: string
    title: string,
    caption: string,
    description: string
}

class UpdatePostService{
    async execute({post_id, title, caption, description}: PostRequest){
        const updatePost = await prismaClient.post.update({
            where: {
                id: post_id
            },
            data: {
                title: title,
                caption: caption,
                description: description
            }
        });

        return updatePost;
    }
}

export {UpdatePostService}