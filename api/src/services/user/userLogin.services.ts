import { userLogin } from "../../interfaces/user";
import { AppDataSource } from "../../database";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import AppError from "../../errors/appError";

export const userLoginServices = async({email,password}: userLogin) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    const account = users.find((user) => user.email === email)
    
    if(!account){
        throw new AppError("Wrong email/password")
    }
    if(!bcrypt.compareSync(password,account.password)){
        throw new AppError("Wrong email/password")
    }
    
    const token = {
        token:  jwt.sign(
            {email:email},
            String(process.env.JWT_SECRET),
            {expiresIn: '1d'}
        ),
        user_id: account.id
        
    }
       return token
}