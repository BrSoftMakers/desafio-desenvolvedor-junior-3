import { AppDataSource } from "../../database"
import { Post } from "../../entities/post.entity"
import { User } from "../../entities/user.entity"
import AppError from "../../errors/appError"

export const postListOneService = async (id:string) => {

    const postRepository = AppDataSource.getRepository(Post)
    const posts = await postRepository.find()
    const postOne = posts.filter((item) => item.id === id)
    const post = postOne.map((item) => {
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
  return post
   
}