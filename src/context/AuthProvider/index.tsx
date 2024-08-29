import React, {createContext, useEffect, useState} from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>();

    useEffect(() => {
        const user = getUserLocalStorage();

        if (user) {
            setUser(user);
        }
    }, []);
    
    async function authenticate (email: string, password: string) {
        const response = await LoginRequest(email, password); // faz a requisição a API passando o email e senha

        const payload = {token: response.token, email};

        setUser(payload); // carrega o usuário com o email e o token
        setUserLocalStorage(payload);
        // seta tanto no BD quanto no localStorage
    }

    function logout () {
        setUser(null); // zera os dados do usuário (desloga)
        setUserLocalStorage(null);
        // seta tanto no BD quanto no localStorage
    }
    
    return (
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}  
        </AuthContext.Provider>
    )
}

