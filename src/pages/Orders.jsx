import { useEffect } from 'react'
import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { FcAcceptDatabase } from 'react-icons/fc'
import { MdInventory } from 'react-icons/md'
import InnerPageLayout from '../components/layout/InnerPageLayout'
import InnerpageRight from '../components/layout/InnerpageRight'
import PageLayout from '../components/layout/PageLayout'
import IconButton from '../components/shared/buttons/IconButton'
import SelectButton from '../components/shared/buttons/SelectButton'
import Divider from '../components/shared/Divider'
import OrdersItem from '../components/shared/forPage/forOrders/OrdersItem'
import InnerPageButtonGroup from '../components/shared/innerPageElement/InnerPageButtonGroup'
import InnerPageControllerBar from '../components/shared/innerPageElement/InnerPageControllerBar'
import InnerPageItemScroller from '../components/shared/innerPageElement/InnerPageItemScroller'
import InnerPageLeftScroller from '../components/shared/innerPageElement/InnerPageLeftScroller'
import InnerPageSearchBar from '../components/shared/innerPageElement/InnerPageSearchBar'
import InnerPageTabs from '../components/shared/innerPageElement/InnerPageTabs'
import InnerSquereSearchBtn from '../components/shared/innerPageElement/InnerSquereSearchBtn'
import SelectTabButton from '../components/shared/innerPageElement/SelectTabButton'
import PagesHeader from '../components/shared/PagesHeader'
import updateTitle from '../utils/updateTitle'
import { appName } from '../../src/utils/const'
import ItemOrderListLoder from '../components/loders/ItemOrderListLoder'
import { useDispatch, useSelector } from 'react-redux'
import InnerPagetop from '../components/shared/innerPageElement/InnerPagetop'
import {
  useGetOrderListQuery,
  useGetOrderQuery,
} from '../redux/api/orderPage_api'
import { setSelectTab, setSelectedOrder } from '../redux/slice/orderPageSlice'
import viewDate from '../utils/viewDate'
import OrderDetailsTableLoder from '../components/shared/forPage/forOrders/OrderDetailsTableLoder'

const Orders = () => {
  const [sharchShow, setSharchShow] = useState(false)
  const [selectDetails, setSelectDetails] = useState('order details')
  const { showAddOrder, selctedOrder, selectTab } = useSelector(
    (state) => state.orderPage
  )
  const dispatch = useDispatch()
  const {
    data: listData,
    isError: listError,
    isFetching: listFetching,
  } = useGetOrderListQuery('1')
  const orderList = listData?.data || []
  const {
    data: orderData,
    isError: orderError,
    isFetching: orderFetching,
  } = useGetOrderQuery(selctedOrder?.order_id || '1', {
    refetchOnMountOrArgChange: true,
  })

  const singleOrder = orderData?.data[0] || {}

  const {
    order_id,
    order_number,
    created_on,
    delivered_on,
    sku,
    order_amount,
    delivered,
    paid,
    status,
    items,
  } = singleOrder || {}


  useEffect(() => {
    orderList?.length && dispatch(setSelectedOrder(orderList[0]))
  }, [orderList])

  useEffect(() => {
    updateTitle(appName + ' | Order')
  }, [])

  return (
    <PageLayout>
      <PagesHeader title="Home" subtitle="Orders" />
      <InnerPageLayout>
        <InnerpageRight>
          <InnerPagetop
            icon={<MdInventory />}
            title="Total Orders: 1841"
            btnTitle="Add Order"
            // btnOnClick={() => setShowAddProModal((p) => !p)}
          />
          <Divider className="mt-3" />

          <InnerPageControllerBar>
            {sharchShow ? (
              <InnerPageSearchBar
                set={setSharchShow}
                placeHolder="Search Orders"
              />
            ) : (
              <>
                <InnerPageButtonGroup>
                  <SelectButton
                    title="All"
                    selected={selectTab === 'All'}
                    onClick={() => dispatch(setSelectTab('All'))}
                  />
                  <SelectButton
                    title="In Progress"
                    selected={selectTab === 'In Progress'}
                    onClick={() => dispatch(setSelectTab('In Progress'))}
                  />
                  <SelectButton
                    title="Delivered"
                    selected={selectTab === 'Delivered'}
                    onClick={() => dispatch(setSelectTab('Delivered'))}
                  />
                  <SelectButton
                    title="Rejected"
                    selected={selectTab === 'Rejected'}
                    onClick={() => dispatch(setSelectTab('Rejected'))}
                  />
                </InnerPageButtonGroup>
                <InnerSquereSearchBtn
                  btnOnClick={() => setSharchShow((p) => !p)}
                />
              </>
            )}
          </InnerPageControllerBar>
          <InnerPageItemScroller>
            {listFetching
              ? Array(4)
                  .fill(0)
                  .map((_, index) => <ItemOrderListLoder key={index} />)
              : orderList?.map((item, index) => (
                  <OrdersItem
                    key={index}
                    deta={item}
                    selected={item.order_id === selctedOrder?.order_id}
                  />
                ))}
          </InnerPageItemScroller>
        </InnerpageRight>

        <InnerPageLeftScroller>
          <div className="m-6">
            <InnerPageTabs>
              <SelectTabButton
                state={selectDetails}
                title="Order Details"
                set={setSelectDetails}
              />
              <SelectTabButton
                state={selectDetails}
                title="Retailers Details"
                set={setSelectDetails}
              />
            </InnerPageTabs>
            {selectDetails === 'order details' && (
              <>
                {orderError && <div>Something went wrong</div>}
                {orderFetching ? (
                  <OrderDetailsTableLoder />
                ) : (
                  <>
                    <div className="flex justify-between mt-6">
                      <div>
                        <table className="table-fixed border-spacing-x-3 border-separate">
                          <tbody>
                            <tr>
                              <td>Order No.</td>
                              <td className="text-secondary">{order_number}</td>
                            </tr>
                            <tr>
                              <td>Date</td>
                              <td className="text-secondary">
                                {viewDate(delivered_on)}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="flex gap-3 items-center">
                        <IconButton
                          className="!bg-red-600 hover:opacity-70 hover:!bg-red-600"
                          title="Regect Order"
                          icon={<AiFillCloseCircle />}
                        />
                        <IconButton
                          className="!bg-green-800 hover:opacity-70 hover:!bg-green-800"
                          title="Accept Order"
                          icon={<FcAcceptDatabase />}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <table className="w-full orderTable border-separate  border-spacing-x-2 border-spacing-y-1">
                        <thead className="">
                          <tr className="">
                            <th className="w-12">S. No</th>
                            <th className="text-left">Product Name</th>
                            <th>Qty.</th>
                            <th className="w-14">Unit</th>
                            <th className="w-40">Selling Price/Unit</th>
                            <th>Amount</th>
                            <th>Offers</th>
                          </tr>
                        </thead>

                        <tbody className="">
                          {items?.map((item, index) => (
                            <tr key={index}>
                              <td className="text-right">{index + 1}</td>
                              <td>{item?.name}</td>
                              <td className="text-center">{item?.quantity}</td>
                              <td className="text-right">
                                {item?.stock_quantity + item?.unite}
                              </td>
                              <td className="text-right">
                                ${item?.selling_price}
                              </td>
                              <td className="text-right">{item?.amount}</td>
                              <td>{item?.offers}</td>
                              <td className="w-4">
                                <button className="text-red-600 border-red-600 border px-2">
                                  Edit
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </>
            )}

            {selectDetails === 'retailers details' && <h1>retailars</h1>}
          </div>
        </InnerPageLeftScroller>
      </InnerPageLayout>
    </PageLayout>
  )
}

export default Orders
