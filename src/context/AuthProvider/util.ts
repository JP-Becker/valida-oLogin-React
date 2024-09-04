import { Api } from "../services/api";
import { IUser } from "./types";

export function setUserLocalStorage (user: IUser | null) { // função para armazenar o usuario no localStorage do browser
    localStorage.setItem('u', JSON.stringify(user));// setando o item do local storage, sem medidas de segurança
    // localStorage sempre armazena em JSON, então tem q converter a string
}

export function getUserLocalStorage () {
    const json = localStorage.getItem('u'); //guardando o item buscado do localStorage (salvo em formato JSON)

    if (!json) {
        return null;
    } //verificando se o item de fato existe no localStorage. se sim, retorna ele (user), senao retorna nulo

    return JSON.parse(json); 
}


export async function LoginRequest (email: string, password: string) {
    try {
        const request = await Api.post('login', {email, password}); //método da requisição

        return request.data;
    } catch (error) {
        return null
    }
}