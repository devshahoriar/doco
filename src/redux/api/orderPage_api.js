import api from './api'

const orderPageApi = api.injectEndpoints({
  endpoints: (build) => ({
    getOrderList: build.query({
      query: (page) => ({
        url: `/admin/orders/`,
      }),
    }),
    getOrder: build.query({
      query: (id) => ({
        url: `/admin/orders/order_id`,
      }),
    }),
  }),
})

export const { useGetOrderListQuery, useGetOrderQuery } = orderPageApi
