import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { featchUsers } from "./ActionCreators";


interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}


const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: {
        [featchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        } ,
        [featchUsers.pending.type]: (state) => {
            state.isLoading = true;
        } ,
        [featchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        } 
    }
})


export default userSlice.reducer;