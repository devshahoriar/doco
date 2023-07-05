import { useDispatch } from 'react-redux'
import Divider from '../../Divider'
import StatusButton from './StatusButton'
import { setSelectedOrder } from '../../../../redux/slice/orderPageSlice'

const OrdersItem = ({ selected, deta }) => {
  const dispatch = useDispatch()
  const {
    order_id,
    created_on,
    delivered_on,
    sku,
    order_amount,
    delivered,
    paid,
    status,
    retailer: {
      retailer_id,
      name,
      credit_score,
      outstanding,
      active,
      blocked,
      mobile,
      gst_number,
      image,
    },
  } = deta || {}

  return (
    <>
      <div
        className={`p-2  hover:bg-sec_light hover:bg-opacity-10 bg-opacity-10 hover:border-sec_light rounded-lg border  border-transparent  cursor-pointer ${
          selected && 'bg-sec_light !border-sec_light'
        }`}
        onClick={() => dispatch(setSelectedOrder(deta))}
      >
        <div className="flex justify-between w-full ">
          <div className="flex items-center">
            <img
              src={image || 'https://source.unsplash.com/random/?shop'}
              className="h-[40px] w-[40px] object-cover rounded-md"
              alt="shop image"
            />
            <div className="font-thin ml-4">
              <h1 className="text-primary font-s font-semibold">
                {name || 'Shop Name'}
              </h1>
            </div>
          </div>
          <StatusButton status={status} />
        </div>
        <div className="mt-2">
          <table className="text-primary font-semibold table-auto w-full ">
            <tbody>
              <tr>
                <td className="">Cradit Score</td>
                <td className="">{credit_score}</td>
              </tr>
              <tr>
                <td className="">Outstanding</td>
                <td className="">${outstanding}</td>
                <td className="">Credit Limit</td>
                <td className="">${sku}</td>
              </tr>
              {/* <tr>
                <td>Number Of SKU's</td>
                <td>{sku}</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
      <Divider className="my-4 " />
    </>
  )
}

export default OrdersItem
