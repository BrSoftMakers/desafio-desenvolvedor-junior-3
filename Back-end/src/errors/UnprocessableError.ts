import { BaseError } from "./BaseError";

export class UnprocessableError extends BaseError {
    constructor(
        message: string = "Parâmetros válidos, porém com erros de semântica" 
    ) {
        super(422, message)
    }
}