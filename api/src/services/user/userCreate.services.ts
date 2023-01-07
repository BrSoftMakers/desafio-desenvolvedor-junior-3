import { createUser } from "../../interfaces/user";
import { AppDataSource } from "../../database";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt"
import AppError from "../../errors/appError";


export const userCreateServices = async ({name, email,password, img}: createUser) => {

    const userRepository = AppDataSource.getRepository(User) 

    const users = await userRepository.find()

    const alreadyExistsEmail = users.find((user) => user.email === email)
 
    if(alreadyExistsEmail){
      throw new AppError("Email already exists",403)
      
    }

    const user = new User()
    user.id = user.id
    user.name = name
    user.email = email
    user.img = img
    user.password = bcrypt.hashSync(password,10)
    user.created_at = user.created_at
    await userRepository.save(user)
   const result = {
    id:user.id,
    name: user.name,
    email: user.email,
    img: user.img,
    created_at: user.created_at
   }
   
 return result

}