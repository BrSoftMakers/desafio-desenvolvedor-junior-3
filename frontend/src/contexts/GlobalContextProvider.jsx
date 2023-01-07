import GlobalContext from "./GlobalContext";
import useGlobalContextProvider from "../hooks/useGlobalContextProvider";

function GlobalContextProvider(props){
    const valuesProvider = useGlobalContextProvider();

    return (
        <GlobalContext.Provider value={valuesProvider}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;