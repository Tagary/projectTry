import { DirectoryActions, DirectoryActionTypes, DirectoryState } from "../types/directory";


const intialState: DirectoryState = {
    openModal: false,
    index: 0,
    massiveDirectory: [{
        extensionDirectory: false,
        id: 1,
        oneDirectory: [{
            id: 1,
            name: 'Новосибирск'
        },
        {
            id: 2,
            name: 'Бердск'
        },
        {
            id: 3,
            name: 'Искитим'
        },
        {
            id: 4,
            name: 'Болотное'
        }]
    },
    {
        extensionDirectory: true,
        id: 2,
        oneDirectory: [{
            id: 1,
            name: 'Новосибирск'
        },
        {
            id: 2,
            name: 'Бердск'
        },
        {
            id: 3,
            name: 'Искитим'
        },
        {
            id: 4,
            name: 'Болотное'
        }]
    }]


    
}


export const directoryReducer = (state = intialState, action: DirectoryActions): DirectoryState => {
    switch (action.type) {
        case DirectoryActionTypes.FETCH_ADD_DIRECTORY:
            return {...state, massiveDirectory: action.payload }

        case DirectoryActionTypes.FETCH_EDIT_DIRECTORY: 
            return {...state, index: action.payload  }
        default:
            return state;
    }
}