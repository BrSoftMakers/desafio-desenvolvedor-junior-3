import {createContext, ReactNode, useState} from "react"


const initialValue = {
    post:{},
    setPost: () => {},
}

type PostContextProps = {
    children:ReactNode
}

type PostContextType = {
    post:object
    setPost: (newState:object) => void 
}

export const PostContext = createContext<PostContextType>(initialValue)

export const PostProvider = ({children}:PostContextProps) => {

    const [post,setPost] = useState(initialValue.post)


    return(
        <PostContext.Provider value={{post,setPost}}>
            {children}
        </PostContext.Provider>
    )
}