
//Definir la informacion que manejaré en este store

import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

export interface IAuthState {
    isLogginIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

export const authIinitialState: IAuthState = {
    isLogginIn: false,
}

// Interfaz para indicar a React como luce y expone al context
export interface IAuthContextProps {
    authState: IAuthState;
    signIn: ( payload: string ) => void;
    signOut: () => void;
    changeFavoriteAction: ( payload: string ) => void
}

// Creacion del contexto
export const AuthContext = createContext( {} as IAuthContextProps );

// Proveedor de estado a toda la App
export const AuthProvider = ({ children }: any ) => {

    const [authState, dispatch] = useReducer( authReducer, authIinitialState)

    const signIn = ( payload: string ) => {
        dispatch({ type: 'signIn', payload });
    }

    const signOut = () => {
        dispatch({ type: 'signOut' });
    }

    const changeFavoriteAction = ( payload: string ) => {
        dispatch({ type: 'changeFavoriteAction', payload });
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn, 
            signOut,
            changeFavoriteAction,
        }}>
            { children }
        </AuthContext.Provider>
    )
}