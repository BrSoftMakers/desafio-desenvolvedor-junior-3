import { Request,Response } from "express"
import { userCreateServices } from "../services/user/userCreate.services"
import { userLoginServices } from "../services/user/userLogin.services"

const userCreateController = async (req: Request, res: Response) => {
    const {name, email,password} = req.body
    const newUser = await userCreateServices({name, email,password})
    res.status(201).json(newUser)
}

const userLoginController = async (req: Request, res: Response) => {   
    const {email,password} = req.body        
    const token = await userLoginServices({email,password})    
    res.status(201).json(token)
}

export {userCreateController,userLoginController}