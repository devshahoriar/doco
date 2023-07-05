import { data } from 'autoprefixer'
import DecoButton from '../../buttons/DecoButton'

const Ditem = ({ title, deta }) => {
  return (
    <div className="flex items-center gap-4 lg:gap-6">
      <h1 className="font-semibold text-sm">{title}</h1>
      <p className="text-sm">{deta}</p>
    </div>
  )
}

const ItemTransactionRetailar = () => {
  return (
    <div className="p-4 bg-sec_light bg-opacity-20 mb-4 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://source.unsplash.com/random/?logo"
            alt=""
          />
          <h1 className="font-semibold">Store name</h1>
        </div>
        <div className="flex gap-2">
          <DecoButton
            className="border border-secondary bg-sec_light bg-opacity-30 text-secondary hover:bg-secondary"
            title="Order Details"
          />
          <DecoButton
            className="border border-secondary bg-sec_light bg-opacity-30 text-secondary hover:bg-secondary"
            title="Downlode Invoice"
          />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 lg:gap-x-12">
        <Ditem title="Ordered On" deta="12 Dec, 22" />
        <Ditem title="Amount Paid" deta="₹3,00,090" />
        <Ditem title="Paid To" deta="Akash Malhotra" />
        <Ditem title="Paid Type" deta="Full Payment" />
        <Ditem title="Delivered On" deta="14 Dec, 22" />
        <Ditem title="Payment Date" deta="₹16 Dec, 22" />
        <Ditem title="Payment Mode" deta="Cash" />
      </div>
    </div>
  )
}

export default ItemTransactionRetailar
