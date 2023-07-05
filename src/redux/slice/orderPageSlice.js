import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showAddOrder: true,
  selctedOrder: null,
  selectTab: 'All',
}

const orderPageSlice = createSlice({
  name: 'orderPage',
  initialState,
  reducers: {
    openShowAddOrder: (state) => {
      state.showAddOrder = true
    },
    closeShowAddOrder: (state) => {
      state.showAddOrder = false
    },
    setSelectedOrder: (state, action) => {
      state.selctedOrder = action.payload
    },
    setSelectTab: (state, action) => {
      state.selectTab = action.payload
    },
  },
})

export const { openShowAddOrder, closeShowAddOrder, setSelectedOrder,setSelectTab } =
  orderPageSlice.actions
export default orderPageSlice.reducer
