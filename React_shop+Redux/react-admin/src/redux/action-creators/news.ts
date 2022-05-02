import { NewsActionTypes, objectNews } from "../types/news";



export function OpenModal() {
    return {type: NewsActionTypes.FETCH_OPENMOD}
}
export function CloseModal() {
    return {type: NewsActionTypes.FETCH_CLOSEMOD}
}
export function NewsAdd(objectNewsing: objectNews) {
    return {type: NewsActionTypes.FETCH_NEWSADD, payload: objectNewsing }
}


