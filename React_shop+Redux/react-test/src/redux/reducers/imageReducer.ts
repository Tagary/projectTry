import { ImageState, ImageAction, ImageActionsTypes } from './../types/image';

const initialState: ImageState = {
    oneImage: [],
    images: [],
    page: 1,
    error: null,
    limit: 6,
    loading: false,
    payload: undefined,
}

export const imageReducer = (state = initialState, action: ImageAction): ImageState => {
    console.log(state);
    
    switch(action.type) {
        case ImageActionsTypes.FETCH_IMAGE:
            return {...state, loading: true}
        case ImageActionsTypes.FETCH_IMAGE_SUCCESS:
            return {...state, loading: false, images: action.payload}
        case ImageActionsTypes.FETCH_IMAGE_ERROR:
            return {...state, loading: false, error: action.payload}
        case ImageActionsTypes.SET_IMAGE_PAGE: 
            return {...state, page: action.payload}
        case ImageActionsTypes.FETCH_IMAGE_MORE: 
            return {...state, loading: true, oneImage: action.payload}
        case ImageActionsTypes.FETCH_LOADED: 
            return {...state, loading: false}
        default: 
            return state
    }
}