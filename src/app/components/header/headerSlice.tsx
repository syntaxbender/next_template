import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "../../../lib/store"

// Define a type for the slice state
export interface HeaderState {
    loader: boolean;
    sticky: boolean;
}

// Define the initial state using that type
const initialState: HeaderState = {
    loader: false,
    sticky: false
}

export const headerSlice = createSlice({
  name: 'header',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoaderStatus: (state, action) => {
        state.loader = action.payload;
    },
    setStickyStatus: (state, action) => {
        state.sticky = action.payload;
    },
  }
})

export const { setLoaderStatus, setStickyStatus } = headerSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const isLoaderDone = (state: RootState) => state.header.loader
export const isSticky = (state: RootState) => state.header.sticky

export default headerSlice.reducer