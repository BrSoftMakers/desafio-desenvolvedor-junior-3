import { Request, Response } from 'express'
import { postCreateServices } from '../services/post/postCreate.services'
import { postListService } from '../services/post/postList.services'
import { postListOneService } from '../services/post/postListOne.services'
import { postDeleteService } from '../services/post/postDelete.services'
import { postUpdateService } from '../services/post/postUpdate.services'

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
    const posts = await postListOneService(id)
    res.status(200).json(posts)
 }

 const postDeleteController = async (req: Request, res: Response) => {
    const {id} = req.params
    const userEmail = req.userPayload.userEmail
    const posts = await postDeleteService({id,userEmail})
    res.status(204).json(posts)
 }

 const postUpdateController = async (req: Request, res: Response) => {
    const {id} = req.params
    const userEmail = req.userPayload.userEmail
    const {post} = req.body
    const posts = await postUpdateService({id,userEmail,post})
    res.status(200).json(posts)
   }

export {postCreateController,postListController,postListOneController,postDeleteController,postUpdateController}