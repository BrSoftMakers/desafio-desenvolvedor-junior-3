import { AppDataSource } from "../../database"
import { updatePost } from "../../interfaces/post"
import { Post } from "../../entities/post.entity"
import AppError from "../../errors/appError"

export const postUpdateService = async ({id,post,userEmail,img,title}: updatePost) => {

    const postRepository = AppDataSource.getRepository(Post) 
    
    const postOne = await postRepository.findOne({
        where: {
           id: id
        }
     })

    if(!postOne) {
        throw new AppError("Post not found")
    }
    if(postOne.user.email !== userEmail) {
        throw new AppError("you can only update your posts",401)
    }

   const posts = {
    post: post || postOne.post,
    img: img || postOne.img,
    title: title || postOne.title,
    user: {
        id: postOne.user.id,
        name: postOne.user.name,
        email: postOne.user.email
    },
    created_at: postOne.created_at,
    updated_at: postOne.updated_at
   }

   await postRepository
    .createQueryBuilder()
    .update(posts)
    .where("id = :id", { id: id })
    .execute();

   return posts
   
}