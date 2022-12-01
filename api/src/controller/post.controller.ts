import { Request, Response } from 'express'
import { postCreateServices } from '../services/post/postCreate.services'
import { postListService } from '../services/post/postList.services'
import { postListOneService } from '../services/post/postListOne.services'

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

 const postListOneController = async (req: Request, res: Response) => {
    const {id} = req.params
    const contact = await postListOneService(id)
    res.status(200).json(contact)
 }

export {postCreateController,postListController,postListOneController}