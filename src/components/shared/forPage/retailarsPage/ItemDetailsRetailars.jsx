import { useSelector } from 'react-redux'
import DecoButton from '../../buttons/DecoButton'
import StatusShow from '../StatusShow'
import moment from 'moment'

const statusObj = {
  na: 'border-black text-black',
  pending: 'border-yellow-500 text-yellow-500',
  delevaryed: 'border-green-700 text-green-600',
  collected: 'border-green-700 text-green-600',
}

const ItemDetailsRetailars = ({ item }) => {
  const selectedRetailars = useSelector(
    (state) => state.retailarPage.selectedRetailar
  )

  return (
    <div className="bg-sec_light bg-opacity-20 mb-5 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://source.unsplash.com/random/?logo"
            alt=""
          />
          <h1 className="ml-4 font-semibold">{selectedRetailars?.name}</h1>
        </div>
        <div className="flex gap-2">
          <DecoButton
            className="bg-sec_light border text-sm border-secondary font-semibold bg-opacity-40 text-secondary"
            title="Order Details"
          />
          <DecoButton
            className="bg-sec_light border text-sm border-secondary font-semibold bg-opacity-40 text-secondary"
            title="Accept Order"
          />
          <DecoButton
            className="bg-sec_light border text-sm border-secondary font-semibold bg-opacity-40 text-secondary"
            title="Reject Order"
          />
        </div>
      </div>

      <div className="flex justify-between w-[100%] items-center mt-4">
        <div>
          <table className="table-auto w-[420px]">
            <tbody>
              <tr>
                <td>Ordered On</td>{' '}
                <td>{moment(item?.created_on).format('DD MMM, YYYY')}</td>
                <td>Order SKU</td> <td>{item?.sku}</td>
              </tr>
              <tr>
                <td>Delivered On</td>{' '}
                <td>{moment(item?.delivered_on).format('DD MMM, YYYY')}</td>
                <td>Order Ammount</td> <td>{item?.order_amount}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex gap-1 items-start">
          <p>Delivery Status</p>
          <StatusShow
            stObj={statusObj}
            status={item?.delivered ? 'delevaryed' : 'pending'}
          />
        </div>
        <div className="flex gap-1 items-start">
          <p>Payment Status</p>
          <StatusShow
            stObj={statusObj}
            status={item?.paid ? 'collected' : 'na'}
          />
        </div>
      </div>
    </div>
  )
}

export default ItemDetailsRetailars
