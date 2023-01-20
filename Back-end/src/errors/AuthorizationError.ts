import { BaseError } from "./BaseError";

export class AuthorizationError extends BaseError {
    constructor(
        message: string = "Permissão insuficiente" 
    ) {
        super(403, message)
    }
}