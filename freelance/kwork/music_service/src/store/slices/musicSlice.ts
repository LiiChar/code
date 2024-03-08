import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Music } from '../../interface'

export interface MusicState {
  music: Music[]
}

const initialState: MusicState = {
  music: [],
}

export const MusicSlice = createSlice({
  name: 'Music',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Music>) => {
      state.music = [...state.music, action.payload]
    },
    set: (state, action: PayloadAction<Music[]>) => {
      state.music = action.payload
    },
    remove: (state, action: PayloadAction<number>) => {
        const newMusic = state.music.filter((music) => music.id !== action.payload);
        state.music = [...newMusic]
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, set, remove } = MusicSlice.actions

export default MusicSlice.reducer