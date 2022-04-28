import { Dispatch } from "redux";
import { LoginActionsTypes } from "../types/login";







export function loginAdmin() {
    return {type: LoginActionsTypes.FETCH_ADMINLOG}
}

export function loginSkip() {
    return {type: LoginActionsTypes.FETCH_LOGIN}
}