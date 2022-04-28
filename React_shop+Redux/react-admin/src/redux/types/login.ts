export interface LoginState {
    admin: boolean;
    login: boolean;
}


export enum LoginActionsTypes {
    FETCH_ADMINLOG = 'FETCH_ADMINLOG',
    FETCH_LOGIN = 'FETCH_LOGIN'

}

interface FetchAdminAction {
    type: LoginActionsTypes.FETCH_ADMINLOG;
}

interface FetchLoginAction {
    type: LoginActionsTypes.FETCH_LOGIN;
}

export type LoginActions = 
FetchAdminAction
| FetchLoginAction