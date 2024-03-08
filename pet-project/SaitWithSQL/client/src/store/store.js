import { configureStore } from '@reduxjs/toolkit';
import  counterSlice  from '../feature/slicePost/counterSlice';


export const store = configureStore({
    reducer: {
        post: counterSlice
    }
})