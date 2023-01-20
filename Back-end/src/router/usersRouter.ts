import { Router } from 'express'
import { UsersBusiness } from '../business/UsersBusiness'
import { UsersController } from '../controller/UsersController'
import { UsersDataBase } from '../database/UsersDataBase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'

export const usersRouter = Router()

const usersController = new UsersController(
    new UsersBusiness(
        new UsersDataBase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

usersRouter.get("/", usersController.getUsers)
usersRouter.post("/", usersController.postUser)