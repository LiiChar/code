import { IUser } from './../../models/models';
import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk(
    'userfetchAll',
    async (_, thunkApi) => {
        try {
            const responce = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users2')
            return responce.data
        } catch (e) {
            return thunkApi.rejectWithValue('Не удалось загрузить пользователей')
        }

    }
)