export type BlogInterface = {
    id?:string
    title?:string
    post?:string
    img?:string
    created_at?:string
    updated_at?:string
    user?:{
      id?:string
      name?:string
      email?:string
      img?:string
      created_at?:string
      updated_at?:string
    }
    
  }

export interface BlogData {
    title:string
    img: string
    post:string
}