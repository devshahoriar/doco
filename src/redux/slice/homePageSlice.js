import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filterOptionSelsMer: '',
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setFilterOptionSelMer: (state, action) => {
      state.filterOptionSelsMer = action.payload
    },
    setFilterOptionSelMerClear: (state) => {
      state.filterOptionSelsMer = ''
    },
  },
})

export default homeSlice.reducer

export const { setFilterOptionSelMer, setFilterOptionSelMerClear } =
  homeSlice.actions
