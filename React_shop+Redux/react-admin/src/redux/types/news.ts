export interface NewsState {
    modalEditor: boolean;
    modal: boolean;
    oneNews: Array<objectNews>;
    index: number;
}

export interface objectNews {
    id: number ;
    image?: string | undefined;
    article: string;
    text: string;
    date?: string;
}

export enum NewsActionTypes {
    FETCH_OPENMOD = 'FETCH_OPENMOD',
    FETCH_CLOSEMOD = 'FETCH_CLOSEMOD',
    FETCH_NEWSADD = 'FETCH_NEWSADD',
    FETCH_DELETE = 'FETCH_DELETE',
    FETCH_OPENMODEDIT = 'FETCH_OPENMODEDIT',
    FETCH_CLOSEMODEDIT = 'FETCH_CLOSEMODEDIT',
    FETCH_NEWSEDIT = 'FETCH_NEWSEDIT'
}


interface FetchOpenModAction {
    type: NewsActionTypes.FETCH_OPENMOD;
}

interface FetchCloseModAction {
    type: NewsActionTypes.FETCH_CLOSEMOD;
}


interface FetchOpenModEditAction {
    type: NewsActionTypes.FETCH_OPENMODEDIT;
    payload: number;
}

interface FetchCloseModEditAction {
    type: NewsActionTypes.FETCH_CLOSEMODEDIT;
}


interface FetchNewsAdd {
    type: NewsActionTypes.FETCH_NEWSADD;
    payload: [objectNews];
}
interface FetchNewsEdit {
    type: NewsActionTypes.FETCH_NEWSEDIT;
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
| FetchOpenModEditAction
| FetchCloseModEditAction
| FetchNewsEdit