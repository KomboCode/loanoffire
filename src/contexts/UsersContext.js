import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";


export const UsersContext = createContext();



export const UsersContextProvider = ({ children }) => {

    // const [ login, setLogin ] = useState(false);


    useEffect(() => {

            // const localLogin = Cookies.get("login");
            // if ( localLogin === null ) {
            // console.log("No cookies")
            // } else {
            // setLogin(localLogin);
            // }

    }, []);

    const [ login, setLogin ] = useState(true);
    const [ ficha, setFicha ] = useState(false);

    const handleLogin = () => {
        setLogin(true);
    }

    const handleFicha = () => {
        setFicha(true);
    }

    return (
        <UsersContext.Provider
        value={{
            login,
            handleLogin,
            handleFicha
        }}
        >{children}</UsersContext.Provider>
    )
}