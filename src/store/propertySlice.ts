import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Property } from '../types/properties'

export interface PropertyState {
  currentProperty?: Property
}

const initialState: PropertyState = {
  currentProperty: undefined
}

export const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    saveProperty: (state, action: PayloadAction<Property>) => {
      state.currentProperty = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveProperty } = propertySlice.actions

export default propertySlice.reducer