import { Request, Response } from 'express'
import { postCreateServices } from '../services/post/postCreate.services'

const postCreateController = async (req: Request, res: Response) => {
    const {post} = req.body
    const userEmail = req.userPayload.userEmail
    const newPost = await postCreateServices({post,userEmail})
    res.status(201).json(newPost)
}

export {postCreateController}