import { createContext, ReactNode, useEffect, useState } from "react"


const initialValue = {
    auth: false,
    setAuth: () => { },
}

type AuthContextProps = {
    children: ReactNode
}

type AuthContextType = {
    auth: boolean
    setAuth: (newState: boolean) => void
}

export const AuthContext = createContext<AuthContextType>(initialValue)

export const AuthProvider = ({ children }: AuthContextProps) => {

    const [auth, setAuth] = useState(initialValue.auth)

    useEffect(() => {
        const token = localStorage.getItem("token")
        console.log(token, "token")
        if (token) {
            return setAuth(true)
        }


    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}