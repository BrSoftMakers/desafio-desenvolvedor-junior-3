import { BaseError } from "./BaseError";

export class NotFoundError extends BaseError {
    constructor(
        message: string = "Recurso não encontrado" 
    ) {
        super(404, message)
    }
}