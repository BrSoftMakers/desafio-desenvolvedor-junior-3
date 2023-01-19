import { UsersDataBase } from "../../database/UsersDataBase"
import { AuthenticationError } from "../../errors/AuthenticationError"
import { ConflictError } from "../../errors/ConflictError"
import { NotFoundError } from "../../errors/NotFoundError"
import { ParamsError } from "../../errors/ParamsError"
import { ILoginInputDTO, ILoginOutputDTO, ISignupInputDTO, ISignupOutputDTO, User } from "../../models/User"
import { Authenticator, ITokenPayload } from "../../services/Authenticator"
import { HashManager } from "../../services/HashManager"
import { IdGenerator } from "../../services/IdGenerator"

export class UsersBusiness {
  constructor(
    private usersDataBase : UsersDataBase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) { }

  public getUsersBussines = async () => {
    const response = await this.usersDataBase.getUsersDataBase()
    return response
  }
  public signup = async (input: ISignupInputDTO): Promise<ISignupOutputDTO> => {
    const { name, email, password } = input

    if (typeof name !== "string") {
      throw new ParamsError("Parâmetro 'name' inválido: deve ser uma string")
    }
    if (typeof email !== "string") {
      throw new ParamsError("Parâmetro 'email' inválido: deve ser uma string")
    }
    if (typeof password !== "string") {
      throw new ParamsError("Parâmetro 'password' inválido: deve ser uma string")
    }
    if (name.length < 3) {
      throw new ParamsError("Parâmetro 'name' inválido: mínimo de 3 caracteres")
    }
    if (password.length < 6) {
      throw new ParamsError("Parâmetro 'password' inválido: mínimo de 6 caracteres")
    }
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new ParamsError("Parâmetro 'email' inválido")
    }
    const isEmailAlreadyExists = await this.usersDataBase.findByEmail(email)

    if (isEmailAlreadyExists) {
      throw new ConflictError("Email já cadastrado")
    }

    const id = this.idGenerator.generate()
    const hashedPassword = await this.hashManager.hash(password)

    const user = new User(
      id,
      name,
      email,
      hashedPassword,
    )

    await this.usersDataBase.createUser(user)

    const payload: ITokenPayload = {
      id: user.getId()
    }

    const token = this.authenticator.generateToken(payload)

    const response: ISignupOutputDTO = {
      message: "Cadastro realizado com sucesso",
      token
    }

    return response
  }

  public login = async (input: ILoginInputDTO): Promise<ILoginOutputDTO> => {
    const { email, password } = input

    if (typeof email !== "string") {
      throw new ParamsError("Parâmetro 'email' inválido")
    }

    if (typeof password !== "string") {
      throw new ParamsError("Parâmetro 'password' inválido")
    }

    if (password.length < 6) {
      throw new ParamsError("Parâmetro 'password' inválido: mínimo de 6 caracteres")
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new ParamsError("Parâmetro 'email' inválido")
    }

    const userDB = await this.usersDataBase.findByEmail(email)

    if (!userDB) {
      throw new NotFoundError("Email não cadastrado")
    }

    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
    )

    const isPasswordCorrect = await this.hashManager.compare(
      password,
      user.getPassword()
    )

    if (!isPasswordCorrect) {
      throw new AuthenticationError("Password incorreto")
    }

    const payload: ITokenPayload = {
      id: user.getId()
    }

    const token = this.authenticator.generateToken(payload)

    const response: ILoginOutputDTO = {
      message: "Login realizado com sucesso",
      token
    }

    return response
  }
}