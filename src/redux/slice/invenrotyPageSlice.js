import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showAddProduct: false,
  showAddBrand: false,
  selectedProduct: {},
}

const inventoryPageSlice = createSlice({
  name: 'inventoryPage',
  initialState,
  reducers: {
    openShowAddProduct: (state) => {
      state.showAddProduct = true
    },
    closeShowAddProduct: (state) => {
      state.showAddProduct = false
    },
    openShowAddBrand: (state) => {
      state.showAddBrand = true
    },
    closeShowAddBrand: (state) => {
      state.showAddBrand = false
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload
    },
  },
})

export const {
  openShowAddProduct,
  openShowAddBrand,
  closeShowAddBrand,
  closeShowAddProduct,
  setSelectedProduct,
} = inventoryPageSlice.actions
export default inventoryPageSlice.reducer
