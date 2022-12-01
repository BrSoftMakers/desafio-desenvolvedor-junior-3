import { AppDataSource } from "../../database"
import { updatePost } from "../../interfaces/post"
import { Post } from "../../entities/post.entity"
import AppError from "../../errors/appError"

export const postUpdateService = async ({id,post,userEmail}: updatePost) => {

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
        throw new AppError("you can only update your posts")
    }

    const postUpdate = new Post()
    postUpdate.post = post || postUpdate.post
    
    

}