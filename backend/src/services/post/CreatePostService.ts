import prismaClient from "../../prisma";

interface PostRequest {
    title: string;
    caption: string;
    description: string;
    author_id;
}

class CreatePostService {
    async execute({ title, caption, description, author_id }: PostRequest) {
        const post = await prismaClient.post.create({
            data: {
                title: title,
                caption: caption,
                description: description,
                authorId: author_id
            }
        })
        return post;
    }
}

export { CreatePostService }