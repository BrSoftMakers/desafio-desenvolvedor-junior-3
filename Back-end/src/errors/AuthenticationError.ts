import { BaseError } from "./BaseError";

export class AuthenticationError extends BaseError {
    constructor(
        message: string = "Credenciais inválidas" 
    ) {
        super(401, message)
    }
}