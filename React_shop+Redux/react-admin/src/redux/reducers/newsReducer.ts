import { NewsActions, NewsActionTypes, NewsState } from "../types/news";
import diavolo from '../../assets/images/diavolo_arm_sliced.png'

const now = new Date();
const nowDay = `${now.getDate()}.${now.getMonth() + 1 }.${now.getFullYear()}`;

const intialState: NewsState = {
    modalEditor: false,
    modal: false,
    oneNews: [
        {   
            id: 1,
            article: 'Diavolo',
            image: `${diavolo}`,
            text: 'Почему Джорно такой сильный',
            date: `${nowDay}`
        }
    ],
    index: 0,
    
}

export const newsReducer = (state = intialState, action: NewsActions) : NewsState => {
    switch (action.type) {
        case NewsActionTypes.FETCH_OPENMOD:
            return {...state, modal: true}
        case NewsActionTypes.FETCH_CLOSEMOD:
            return {...state, modal: false}
        case NewsActionTypes.FETCH_OPENMODEDIT:
            return {...state, modalEditor: true, index: action.payload}
        case NewsActionTypes.FETCH_CLOSEMODEDIT:
            return {...state, modalEditor: false}
        case NewsActionTypes.FETCH_NEWSADD:
            return {...state, oneNews: action.payload }
        case NewsActionTypes.FETCH_DELETE: 
            return {...state, oneNews: action.payload}
            
        default:
            return state;
    }
}
