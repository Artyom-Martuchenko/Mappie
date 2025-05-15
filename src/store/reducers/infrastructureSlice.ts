import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ListItems } from 'constants/constants';

interface infrastructureState {
  value: ListItems[];
}

const initialState : infrastructureState = { value: [] }

const infrastructureSlice = createSlice({
  name: 'infrastructure',
  initialState,
  reducers: {
    add_infrastucture: (state, action: PayloadAction<{elements: ListItems[]}>) => {
      state.value = [...state.value, ...action.payload.elements]
    },
    remove_infrastucture: (state) => {
      state.value = []
    }
  },
})

export const { add_infrastucture, remove_infrastucture } = infrastructureSlice.actions
export default infrastructureSlice.reducer