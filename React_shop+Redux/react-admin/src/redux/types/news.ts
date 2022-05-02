export interface NewsState {
    modal: boolean;
    oneNews: any[];
}

export interface objectNews {
    image: string ;
    article: string;
    text: string;
}

export enum NewsActionTypes {
    FETCH_OPENMOD = 'FETCH_OPENMOD',
    FETCH_CLOSEMOD = 'FETCH_CLOSEMOD',
    FETCH_IMAGE = 'FETCH_IMAGE',
    FETCH_TEXT = 'FETCH_TEXT',
    FETCH_ARTICLE = 'FETCH_ARTICLE',
    FETCH_NEWSADD = 'FETCH_NEWSADD',
}


interface FetchOpenModAction {
    type: NewsActionTypes.FETCH_OPENMOD;
}

interface FetchCloseModAction {
    type: NewsActionTypes.FETCH_CLOSEMOD;
}

interface FetchNewsTxtAction {
    type: NewsActionTypes.FETCH_TEXT;
    payload: string[];
}

interface FetchNewsArticleAction {
    type: NewsActionTypes.FETCH_ARTICLE;
    payload: string[];
}

interface FetchNewsImageAction {
    type: NewsActionTypes.FETCH_IMAGE;
    payload: string[];
}

interface FetchNewsAdd {
    type: NewsActionTypes.FETCH_NEWSADD;
    payload: [objectNews];
}

export type NewsActions = 
FetchOpenModAction
| FetchCloseModAction
| FetchNewsTxtAction
| FetchNewsArticleAction
| FetchNewsImageAction
| FetchNewsAdd

