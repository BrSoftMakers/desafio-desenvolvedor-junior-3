import { Request,Response } from "express"
import { userCreateServices } from "../services/user/userCreate.services"
import { userLoginServices } from "../services/user/userLogin.services"
import { userListOneService } from "../services/user/userListOne.services"

const userCreateController = async (req: Request, res: Response) => {
    const {name, email,password,img} = req.body
    const newUser = await userCreateServices({name, email,password,img})
    res.status(201).json(newUser)
}

const userLoginController = async (req: Request, res: Response) => {   
    const {email,password} = req.body        
    const token = await userLoginServices({email,password})    
    res.status(201).json(token)
}

const userListOneController = async (req: Request, res: Response) => {
    const {id} = req.params
    const users = await userListOneService(id)
    res.status(200).json(users)
}

export {userCreateController,userLoginController,userListOneController}