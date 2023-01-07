import { AppDataSource } from "../../database"
import { User } from "../../entities/user.entity"
import AppError from "../../errors/appError"

export const userListOneService = async (id:string) => {

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.findOne({
        where: {
            id:id
        }
    })

    if(!users){
        throw new AppError("User not found")
    }
    
    const result = {
        id:users.id,
        name: users.name,
        email: users.email,
        img: users.img,
        created_at: users.created_at,
        updated_at:users.updated_at
    }
        
    return result
}