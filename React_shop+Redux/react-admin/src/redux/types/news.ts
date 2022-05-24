export interface NewsState {
    modal: boolean;
    oneNews: Array<objectNews>;
}

export interface objectNews {
    id: number ;
    image?: string ;
    article: string;
    text: string;
}

export enum NewsActionTypes {
    FETCH_OPENMOD = 'FETCH_OPENMOD',
    FETCH_CLOSEMOD = 'FETCH_CLOSEMOD',
    FETCH_NEWSADD = 'FETCH_NEWSADD',
    FETCH_DELETE = 'FETCH_DELETE',
}


interface FetchOpenModAction {
    type: NewsActionTypes.FETCH_OPENMOD;
}

interface FetchCloseModAction {
    type: NewsActionTypes.FETCH_CLOSEMOD;
}


interface FetchNewsAdd {
    type: NewsActionTypes.FETCH_NEWSADD;
    payload: [objectNews];
}

interface FetchNewsDelete {
    type: NewsActionTypes.FETCH_DELETE;
    payload: [objectNews]
}

export type NewsActions = 
FetchOpenModAction
| FetchCloseModAction
| FetchNewsAdd
|FetchNewsDelete

