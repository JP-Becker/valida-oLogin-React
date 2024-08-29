import { useContext } from "react";
import { AuthContext } from ".";

// função para facilitar o uso do contexto em outros componentes
export const useAuth = () => {
    const context = useContext(AuthContext);// pega todas as infos do contexto

    return context;
}