import { combineReducers } from "redux";
import { loginReducer } from './loginReducer';
import { newsReducer } from "./newsReducer";
import { personalReducer } from "./personalDataReducer";


export const rootReducer = combineReducers({
        login: loginReducer,
        person: personalReducer,
        news: newsReducer,
})

export type RootState = ReturnType<typeof rootReducer>