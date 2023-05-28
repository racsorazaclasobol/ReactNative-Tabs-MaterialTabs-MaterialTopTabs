import { IAuthState } from "./AuthContext";

type AuthActions = 
    | { type: 'signIn', payload: string }
    | { type: 'signOut' }
    | { type: 'changeFavoriteAction', payload: string }

export const authReducer = ( state: IAuthState, action:AuthActions ): IAuthState => {

    switch (action.type) {
        case 'signIn':
            
            return {
                ...state,
                isLogginIn: true,
                username: action.payload
            }

        case 'signOut':
            
            return {
                ...state,
                isLogginIn: false,
                username: undefined,
                favoriteIcon: undefined,
            }

        case 'changeFavoriteAction':
            
            return {
                ...state,
                favoriteIcon: action.payload
            }
    
        default:
            return state;
    }


    return state
}