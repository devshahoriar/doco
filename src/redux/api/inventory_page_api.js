import api from './api'

const inventory_page_api = api.injectEndpoints({
  endpoints: (builder) => ({
    inventoryProductList: builder.query({
      query: () => '/admin/products/',
    }),
    inventoryProductDetails: builder.query({
      query: (id) => `/admin/products/product_id`,
    }),
  }),
})

export const { useInventoryProductListQuery, useInventoryProductDetailsQuery } =
  inventory_page_api
