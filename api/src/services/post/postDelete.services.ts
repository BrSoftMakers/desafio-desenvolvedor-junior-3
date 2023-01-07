import { AppDataSource } from "../../database"
import { Post } from "../../entities/post.entity"
import { User } from "../../entities/user.entity"
import { deletePost } from "../../interfaces/post"
import AppError from "../../errors/appError"

export const postDeleteService = async ({id, userEmail}: deletePost) => {
    const postRepository = AppDataSource.getRepository(Post)
    const posts = await postRepository.find()
    const postOne = await postRepository.findOne({
        where: {
           id: id
        }
     })
    if(!postOne) {
        throw new AppError("Post not found")
    }
    if(postOne.user.email !== userEmail) {
        throw new AppError("you can only delete your posts")
    }
    await postRepository.createQueryBuilder().delete().from(Post).where("id = :id", { id }).execute();
}