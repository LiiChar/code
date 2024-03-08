import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    post: []
}

export const fetchGetPost = createAsyncThunk(
    'getPost',
    async function (_, { rejectWithValue, dispatch }) {
        const result = await axios.get('http://localhost:5000/')
        dispatch(getPost(result.data.post))
    }
)

export const fetchChangePost = createAsyncThunk(
    'changePost',
    async function (posts, { rejectWithValue, dispatch }) {
        await axios.post('http://localhost:5000/post' ,{ post: JSON.stringify(posts) })
        const result = await axios.get('http://localhost:5000/')
        dispatch(changePost(result.data.post))
    }
)

export const fetchDeletePost = createAsyncThunk(
    'deletePost',
    async function (id, { rejectWithValue, dispatch }) {
        await axios.delete(`http://localhost:5000/${id}`)
        await dispatch(deletePost(id))
    }
)


export const counterSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        changePost: (state, action) => {
            state.post = [...state.post, action.payload]
        },
        getPost: (state, action) => {
            state.post = action.payload
        },
        deletePost: (state, { payload }) => {
            state.post = state.post.filter(arg => arg.id !== payload)
        }
    },
    extraReducers: {
        [fetchGetPost.fulfilled]: () => {console.log('fetchGetPost suc')},
        [fetchDeletePost.fulfilled]: () => {console.log('fetchDeletePost suc')},
        [fetchChangePost.fulfilled]: () => {console.log('fetchChangePost suc')},
        [fetchGetPost.pending]: () => {console.log('fetchGetPost chang')},
        [fetchDeletePost.pending]: () => {console.log('fetchDeletePost chang')},
        [fetchChangePost.pending]: () => {console.log('fetchChangePost chang')},
        [fetchGetPost.rejected]: () => {console.log('fetchGetPost err')},
        [fetchDeletePost.rejected]: () => {console.log('fetchDeletePost err')},
        [fetchChangePost.rejected]: () => {console.log('fetchChangePost err')},
    }
})

export const { changePost, getPost, deletePost } = counterSlice.actions
export default counterSlice.reducer