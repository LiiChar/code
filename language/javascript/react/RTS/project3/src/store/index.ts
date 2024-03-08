import { gitHubReducer } from './GitHub/gitHubSlice';
import { gitHubApi } from './GitHub/gitHubApi';
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer: {
        [gitHubApi.reducerPath]: gitHubApi.reducer,
        github: gitHubReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(gitHubApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>