import { AppDataSource } from "../../database"
import { Post } from "../../entities/post.entity"

export const postListService = async () => {

    const postRepository = AppDataSource.getRepository(Post)

    const posts = await postRepository.find()

    const result = posts.map((item) => {
        const obj = {
            id:item.id,
            post:item.post,
            user: {
                id:item.user.id,
                name:item.user.name,
                email: item.user.email
            },
            created_at:item.created_at,
            updated_at:item.updated_at
        }
        return obj
    })
    return result

}