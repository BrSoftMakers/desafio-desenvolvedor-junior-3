export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  TokenNotFound = 'TokenNotFound',
  InvalidEntity = 'InvalidEntity',
  UsernameInvalid = 'UsernameInvalid',
  PostNotFound = 'PostNotFound',
  Unauthorized = 'Unauthorized',
}
  
type ErrorResponseObject = { 
  message: string;
  httpStatus: number
};
    
export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
    
};
    
export const errorCatalog: ErrorCatalog = {
  InvalidEntity: {
    message: 'Invalid entity',
    httpStatus: 400,
  },
  TokenNotFound: {
    message: 'Token not found',
    httpStatus: 401,
  },
  EntityNotFound: {
    message: 'Entity not found',
    httpStatus: 404,
  },
  UsernameInvalid: {
    message: 'Username already registered',
    httpStatus: 409,
  },
  PostNotFound: {
    message: 'Post not found',
    httpStatus: 404,
  },
  Unauthorized: {
    message: 'Unauthorized user',
    httpStatus: 401,
  },
};