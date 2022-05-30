import { NewsActionTypes, objectNews } from "../types/news";



export function OpenModal() {
    
    return {type: NewsActionTypes.FETCH_OPENMOD}
}
export function OpenModalEditor(objectNewsIndex: number) {
    
    return {type: NewsActionTypes.FETCH_OPENMODEDIT, payload: objectNewsIndex}
}
export function CloseModal() {
    return {type: NewsActionTypes.FETCH_CLOSEMOD}
}
export function CloseModalEditor() {
    return {type: NewsActionTypes.FETCH_CLOSEMODEDIT}
}
export function NewsAdd(objectNewsing: Array<objectNews> ) {
    return {type: NewsActionTypes.FETCH_NEWSADD, payload: objectNewsing }
}
export function NewsEdit(objectNewsing: Array<objectNews> ) {
    return {type: NewsActionTypes.FETCH_NEWSEDIT, payload: objectNewsing }
}


export function DeleteNews(objectNewsDelete:  Array<objectNews>) {
    return {type: NewsActionTypes.FETCH_DELETE, payload:  objectNewsDelete }
    
}