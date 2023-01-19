import { Request, Response } from "express";
import { UsersBusiness } from "../../business/UsersBusiness";
import { BaseError } from "../../errors/BaseError";
import { ILoginInputDTO, ISignupInputDTO } from "../../models/User";

export class UsersController {
    constructor(
        private usersBusiness: UsersBusiness
    ) {}
    public getUsers = async (req: Request, res: Response) => {
        try {
            const response = await this.usersBusiness.getUsersBussines()
            res.status(200).send(response)
        } catch (error) {
			console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado no endpoint ping" })
        }
    }
    public postUser = async (req: Request, res: Response) => {
        try {
            const response = await this.usersBusiness.getUsersBussines()
            res.status(200).send(response)
        } catch (error) {
			console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado no endpoint ping" })
        }
    }
    public signup = async (req: Request, res: Response) => {
        try {
            const input: ISignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.usersBusiness.signup(input)
            res.status(201).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" })
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: ILoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.usersBusiness.login(input)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" })
        }
    }
}