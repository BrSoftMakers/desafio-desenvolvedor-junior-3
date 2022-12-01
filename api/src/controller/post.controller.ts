import { Request, Response } from 'express'
import { postCreateServices } from '../services/post/postCreate.services'
import { postListService } from '../services/post/postList.services'

const postCreateController = async (req: Request, res: Response) => {
    const {post} = req.body
    const userEmail = req.userPayload.userEmail
    const newPost = await postCreateServices({post,userEmail})
    res.status(201).json(newPost)
}

const postListController = async (req: Request, res: Response) => {
    const posts = await postListService()
    res.status(200).json(posts)
 }

export {postCreateController,postListController}