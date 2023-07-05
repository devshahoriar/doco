import { configureStore } from '@reduxjs/toolkit'
import api from './api/api'
import userSlice from './slice/userSlice'
import inventorySlice from './slice/invenrotyPageSlice'
import orderPageSlice from './slice/orderPageSlice'
import retailarPageSlice from './slice/retailarPageSlice'
import homePageSlice from './slice/homePageSlice'

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userSlice,
    inventoryPage: inventorySlice,
    orderPage: orderPageSlice,
    retailarPage: retailarPageSlice,
    homePage: homePageSlice,
  },
  middleware: (gdm) => gdm().concat(api.middleware),
})

export default store
