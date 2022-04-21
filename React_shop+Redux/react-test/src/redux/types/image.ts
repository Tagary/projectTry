export interface ImageState {
    oneImage: IOneImage;
    images: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
    payload: any;
}


export enum ImageActionsTypes {
    FETCH_IMAGE = 'FETCH_IMAGE',
    FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS',
    FETCH_IMAGE_ERROR = 'FETCH_IMAGE_ERROR',
    SET_IMAGE_PAGE = 'SET_IMAGE_PAGE',
    FETCH_IMAGE_MORE = 'FETCH_IMAGE_MORE',
    FETCH_LOADED = 'FETCH_LOADED',
}

interface FetchImageAction {
    type: ImageActionsTypes.FETCH_IMAGE;
}

interface FetchImageSuccessAction {
    type: ImageActionsTypes.FETCH_IMAGE_SUCCESS;
    payload: any[];
}
interface FetchImageErrorAction {
    type: ImageActionsTypes.FETCH_IMAGE_ERROR;
    payload: string;
}

interface SetImagePage {
    type: ImageActionsTypes.SET_IMAGE_PAGE;
    payload: number;
}

interface FetchImageMore {
    type: ImageActionsTypes.FETCH_IMAGE_MORE;
    payload: any[];
}

interface FetchFakeLoading {
    type: ImageActionsTypes.FETCH_LOADED;
}

export type ImageAction = 
    FetchImageAction 
    | FetchImageErrorAction
    | FetchImageSuccessAction 
    | SetImagePage
    | FetchImageMore
    | FetchFakeLoading