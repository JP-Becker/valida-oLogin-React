export interface IUser {
    email?: string;    
    token?: string;   
} // definindo estrutura basica do objeto usuario

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>; // metodo para autenticar usuario
    logout: () => void; // método (função) logout
}// definindo estrutura basica do objeto usuario

export interface IAuthProvider {
    children: JSX.Element; // vai receber um componente react (JSX)
}