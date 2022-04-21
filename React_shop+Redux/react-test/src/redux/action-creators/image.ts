import {Dispatch} from "redux";
import axios from "axios";
import { ImageAction, ImageActionsTypes } from "../types/image";


export const fetchImages = (page = 1, limit = 6) => {
    return async (dispatch: Dispatch<ImageAction>) => {
        try {
            dispatch({type: ImageActionsTypes.FETCH_IMAGE})
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
                params: {_page: page, _limit: limit}
            })
            setTimeout(() => {
                dispatch({type: ImageActionsTypes.FETCH_IMAGE_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: ImageActionsTypes.FETCH_IMAGE_ERROR,
                payload: 'Произошла ошибка при загрузке изображений'
            })
        }
    }
}
export function setImagePage(page: number): ImageAction {
    return {type: ImageActionsTypes.SET_IMAGE_PAGE, payload: page}
}


export function fakeLoading() {
    return {type: ImageActionsTypes.FETCH_LOADED}
}

export function getMoreInfo(image: any[]):ImageAction {

           return {type: ImageActionsTypes.FETCH_IMAGE_MORE, payload: image}
    
}