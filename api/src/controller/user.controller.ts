import { Request,Response } from "express"
import { userCreateServices } from "../services/user/userCreate.services"

const userCreateController = async (req: Request, res: Response) => {
    const {name, email,password} = req.body
    const newUser = await userCreateServices({name, email,password})
    res.status(201).json(newUser)
}

export {userCreateController}