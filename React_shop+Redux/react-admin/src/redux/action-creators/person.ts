import { PersonalActionTypes } from "../types/personal";


export function Edit() {
    return {type: PersonalActionTypes.FETCH_EDIT}
}

export function ChangeName(changeName: string) {
    return {type: PersonalActionTypes.FETCH_CHANGENAME, payload: changeName }
}




export function ChangeEmail(changeEmail: string) {
    return {type: PersonalActionTypes.FETCH_CHANGEEMAIL, payload: changeEmail }
}

export function ChangeImage(changeImg: string | undefined) {
    return {type: PersonalActionTypes.FETCH_CHANGEIMG, payload: changeImg}
}