import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface savedTopicsState {
  value: any[];
}

const initialState : savedTopicsState = { value: [] }

const savedTopicsSlice = createSlice({
  name: 'savedTopics',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{element: any}>) => {
      state.value = [...state.value, action.payload.element]
    },
    remove: (state, action: PayloadAction<{xid: string}>) => {
      state.value = state.value.filter((el) => el.xid !== action.payload.xid)
    }
  },
})

export const { add, remove } = savedTopicsSlice.actions
export default savedTopicsSlice.reducer