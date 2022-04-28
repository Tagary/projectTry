import { LoginActions, LoginActionsTypes, LoginState } from "../types/login"

const intialState: LoginState = {
    admin: false,
    login: false,
}

export const loginReducer = (state = intialState, action: LoginActions): LoginState => {
    switch(action.type) {
        case LoginActionsTypes.FETCH_ADMINLOG: 
            return {...state, admin: true}
        case LoginActionsTypes.FETCH_LOGIN: 
            return {...state, login: true}
        default: 
            return state
    }
}