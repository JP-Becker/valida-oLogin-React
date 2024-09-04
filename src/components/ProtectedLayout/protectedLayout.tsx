import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth"

export const ProtectedLayout = ({children}: { children: JSX.Element}) => {// crindo layout simplificadamente nos parametros
            // O protected layout vai fazer com que carregue apenas se o usuário estiver logado e autenticado
    const auth = useAuth(); // usando o hook criado para puxar as informações de contexto

    if (!auth.email) {
        return <h1>Só quer mamão, só quer mel?</h1>
    }// se o email não for autorizado 

    return children;// se for carrega
}