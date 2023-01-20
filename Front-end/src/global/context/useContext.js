import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {
    const [nome, setNome] = useState('Maycon :)');
    return (
        <GlobalContext.Provider value={{nome, setNome}}>{children}</GlobalContext.Provider>
    )
} 