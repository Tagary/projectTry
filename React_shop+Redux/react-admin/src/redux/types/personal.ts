export interface PersonalState {
    image: string | undefined;
    name: string;
    email: string;
    edit: boolean;
}


export enum PersonalActionTypes {
    FETCH_EDIT = 'FETCH_EDIT',
    FETCH_CHANGEIMG = 'FETCH_CHANGEIMG',
    FETCH_CHANGENAME = 'FETCH_CHANGENAME',
    FETCH_CHANGEEMAIL = 'FETCH_CHANGEEMAIL',
}

interface FetchEditAction {
  type: PersonalActionTypes.FETCH_EDIT;  
}
interface FetchChangeNameAction {
  type: PersonalActionTypes.FETCH_CHANGENAME;  
  payload: string;
}
interface FetchChangeEmailAction {
  type: PersonalActionTypes.FETCH_CHANGEEMAIL; 
  payload: string;
}
interface FetchChangeImgAction {
  type: PersonalActionTypes.FETCH_CHANGEIMG;
  payload: string | undefined;  
}

export type PersonalActions = 
FetchEditAction
|FetchChangeNameAction
|FetchChangeEmailAction
|FetchChangeImgAction