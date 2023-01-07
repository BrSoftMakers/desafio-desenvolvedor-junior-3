export interface createPost{
    post: string
    userEmail: string
    img:string,
    title:string
}

export interface deletePost{
    id: string
    userEmail: string
}

export interface updatePost{
    post: string
    id: string
    userEmail: string
    img:string,
    title:string
}

export interface schemaPost {
    post: string
}