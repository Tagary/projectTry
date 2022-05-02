import { NewsActions, NewsActionTypes, NewsState } from "../types/news";


const intialState: NewsState = {
    modal: false,
    oneNews: [
        {   article: 'Diavolo',
            image: '/images/svg/Diavolo_arm_sliced.png',
            text: 'Почему ДЖороно такой слиьный',
            
        }
    ]
}

export const newsReducer = (state = intialState, action: NewsActions) : NewsState => {
    switch (action.type) {
        case NewsActionTypes.FETCH_OPENMOD:
            return {...state, modal: true}
        case NewsActionTypes.FETCH_CLOSEMOD:
            return {...state, modal: false}
        case NewsActionTypes.FETCH_NEWSADD:
            return {...state, oneNews: action.payload }

        default:
            return state;
    }
}
