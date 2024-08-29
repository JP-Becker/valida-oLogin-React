import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth"

export const ProtectedLayout = ({children}: { children: JSX.Element}) => {// crindo layout simplificadamente nos parametros
            // O protected layout vai fazer com que carregue apenas se o usuário estiver logado e autenticado
    const auth = useAuth(); // usando o hook criado para puxar as informações de contexto

    return auth.email ? children : <h1>Você não tem acesso!</h1>// se o email for autorizado carrega
}