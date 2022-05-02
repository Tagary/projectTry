import { PersonalActions, PersonalActionTypes, PersonalState } from "../types/personal";


const intialState: PersonalState = {
    name: 'Владимир Миненко',
    email: 'dsadasdsad@gmail.com',
    image: '/images/svg/Diavolo_arm_sliced.png',
    edit: false,
}

export const personalReducer = (state = intialState, action: PersonalActions ):PersonalState => {
    switch (action.type) {
        case PersonalActionTypes.FETCH_CHANGENAME:
            return {...state, name: action.payload}
        case PersonalActionTypes.FETCH_CHANGEEMAIL:
            return {...state, email: action.payload}

        case PersonalActionTypes.FETCH_CHANGEIMG:
                return {...state, image: action.payload}
        case PersonalActionTypes.FETCH_EDIT:
            return {...state, edit: !state.edit}

    
        default:
            return state;
    }
}