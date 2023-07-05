import api from './api'

const retailarApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllRetailers: builder.query({
      query: () => '/admin/retailer/',
    }),
    getOrderlist: builder.query({
      query: (retailerId) => `/admin/retailer/retailer_id/orders/`,
    }),
    getTransactionlist: builder.query({
      query: (retailerId) => `/admin/retailer/retailer_id/transactions/`,
    }),
  }),
})

export const {
  useGetAllRetailersQuery,
  useGetOrderlistQuery,
  useGetTransactionlistQuery,
} = retailarApi
