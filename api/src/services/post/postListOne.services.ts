import { AppDataSource } from "../../database"
import { Post } from "../../entities/post.entity"
import { User } from "../../entities/user.entity"
import AppError from "../../errors/appError"

export const postListOneService = async (id:string) => {

    const postRepository = AppDataSource.getRepository(Post)
    const postOne = await postRepository.findOne({
        where: {
           id: id
        }
     })
    if(!postOne) {
        throw new AppError("Post not found")
    }

    const result = {
        id : postOne.id,
        post: postOne.post,
        img: postOne.img,
        title: postOne.title,
        user:{
           id:postOne.user.id,
           name: postOne.user.name,
           email: postOne.user.email
        },
        created_at: postOne.created_at,
        updated_at: postOne.updated_at
  
      }
  
      return result
   
}