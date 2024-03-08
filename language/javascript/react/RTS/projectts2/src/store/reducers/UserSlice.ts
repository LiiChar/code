import { fetchUsers } from './ActionCreater';
import { IUser } from "../../models/models"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


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

export const userClice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        [fetchUsers.pending.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = true;
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default userClice.reducer;