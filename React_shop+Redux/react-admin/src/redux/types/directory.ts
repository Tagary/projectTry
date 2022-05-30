export interface DirectoryState {
    openModal: boolean;
    index: number;
    massiveDirectory: Array<objectDirectory>;
    
}

export interface objectDirectory {
    extensionDirectory: boolean;
    id: number;
    oneDirectory?: Array<objectDiretoryEntery>
}



export interface objectDiretoryEntery {
    id: number;
    name: string;
}


export enum DirectoryActionTypes {
    FETCH_ADD_DIRECTORY = 'FETCH_ADD_DIRECTORY',
    FETCH_EDIT_DIRECTORY = 'FETCH_EDIT_DIRECTORY',
}


interface FetchAddDirectoryExtensionAction {
    type: DirectoryActionTypes.FETCH_ADD_DIRECTORY;
    payload: Array<objectDirectory>;
}

interface FetchEditDirectoryAction {
    type: DirectoryActionTypes.FETCH_EDIT_DIRECTORY;
    payload: number;
}


export type DirectoryActions = 
| FetchAddDirectoryExtensionAction
| FetchEditDirectoryAction