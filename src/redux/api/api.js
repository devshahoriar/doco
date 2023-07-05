import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { siteUrl } from '../../utils/const'

const fetchQuery = fetchBaseQuery({
  baseUrl: siteUrl,

  prepareHeaders: (headers, { getState }) => {
    // const token = getState().user.accessToken

    // if (token) {
    //   headers.set('authorization', `Bearer ${token}`)
    // }
    return headers
  },
})

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchQuery,
  endpoints: (builed) => ({}),
})

export default api
