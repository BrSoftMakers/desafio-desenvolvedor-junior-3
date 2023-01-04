export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidEntity = 'InvalidEntity',
  UsernameInvalid = 'UsernameInvalid',
}
  
type ErrorResponseObject = { 
  message: string;
  httpStatus: number
};
    
export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
    
};
    
export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    message: 'Entity not found',
    httpStatus: 404,
  },
  InvalidEntity: {
    message: 'Invalid entity',
    httpStatus: 400,
  },
  UsernameInvalid: {
    message: 'Username already registered',
    httpStatus: 409,
  },
};