import { createSlice } from '@reduxjs/toolkit'
import { token } from '../../utils/const'

const initialState = {
  accessToken: token,
  refreshToken: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserData: (state, act) => {
      state.accessToken = act.payload.accessToken
      state.refreshToken = act.payload.refreshToken
    },
  },
})

export const { addUserData } = userSlice.actions
export default userSlice.reducer
