import { applyMiddleware, createStore } from "redux";
import { combineLoads, load, save } from "redux-localstorage-simple";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";


const createStoreMiddleware = applyMiddleware(thunk,
     save({states: ['person'], namespace: 'personalsave'}), 
     save({states: ['login'], namespace: 'loginsave'}), 
     save({states: ['news'], namespace: 'newssave'})
     )(createStore);







export const store = createStoreMiddleware(rootReducer, combineLoads (
    load({states: ['person'], namespace: 'personalsave'}),
    load({states: ['news'], namespace: 'newssave'}),
))

