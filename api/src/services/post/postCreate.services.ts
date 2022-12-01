import { createPost } from "../../interfaces/post"
import { AppDataSource } from "../../database"
import { Post } from "../../entities/post.entity"
import { User } from "../../entities/user.entity"
import AppError from "../../errors/appError"


export const postCreateServices = async ({post, userEmail}: createPost) => {
   const userRepository = AppDataSource.getRepository(User) 

   const store = await userRepository.findOne({
      where: {
         email: userEmail
      }
   })

   if (!store) {
      throw new AppError("Store not found", 404)
    }

   const postRepository = AppDataSource.getRepository(Post)

   const postAll = new Post()
   postAll.post = post
   postAll.user = store
   await postRepository.save(postAll)
   
    const result = {
      id : postAll.id,
      post: postAll.post,
      user:{
         id:postAll.user.id,
         name: postAll.user.name,
         email: postAll.user.email
      },
      created_at: postAll.created_at,
      updated_at: postAll.updated_at

    }

    return result

}