import { DirectoryActionTypes } from "../types/directory";

export function OpenModa(objectDirectoryIndex: number) {
    return {type: DirectoryActionTypes.FETCH_EDIT_DIRECTORY, payload: objectDirectoryIndex }
}