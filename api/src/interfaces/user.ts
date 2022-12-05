export interface createUser{
    name: string 
    email: string
    password:string
    img: string
    
}

export interface createUserSchema{
    name: string 
    email: string
    password:string
    
}

export interface userLogin{
    email:string | any
    password:string | any
}

export interface updateUser{
    name:string | any
    email:string | any
    password:string | any
}