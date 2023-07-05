import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedRetailar: null,
}

const retailarPageSlice = createSlice({
  name: 'retailarPage',
  initialState,
  reducers: {
    setSelectedRetailar: (state, action) => {
      state.selectedRetailar = action.payload
    },
  },
})

export const { setSelectedRetailar } = retailarPageSlice.actions
export default retailarPageSlice.reducer
