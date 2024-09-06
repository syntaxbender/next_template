import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "../../../../lib/store"

// Define a type for the slice state
export interface PreloaderState {
    loader: boolean;
}

// Define the initial state using that type
const initialState: PreloaderState = {
    loader: false,
}

export const preloaderSlice = createSlice({
  name: 'preloader',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoaderStatus: (state, action) => {
        state.loader = action.payload;
    },

  }
})

export const { setLoaderStatus } = preloaderSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const isLoaderDone = (state: RootState) => state.preloader.loader

export default preloaderSlice.reducer