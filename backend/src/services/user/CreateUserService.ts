import prismaClient from "../../prisma";
import { hash } from "bcryptjs"

interface UserRequest{
    name: string,
    email: string,
    password: string
}

class CreateUserService {
    async execute({name, email, password}: UserRequest){
        //Verificar se o usuário enviou o email
        if(!email){
            throw new Error("Email incorreto!");
        }
        //Verificar se o e-mail já está cadastrado no banco de dados
        const userAlredyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if( userAlredyExists){
            throw new Error("Email incorreto!");
        }
        //Criptografia da senha
        const passwordHash = await hash(password, 8)
        //Efetuar cadastro no banco
        const user  = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })
        return user
    }
}

export {CreateUserService}