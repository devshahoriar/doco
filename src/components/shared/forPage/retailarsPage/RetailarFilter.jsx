import { useState } from 'react'

const forPayment = ['Pending', 'In Progress', 'Recieved']
const forDelivery = ['Pending', 'In Progress', 'Delivered']
const forSortByDate = [
  'Recent to oldest Payments',
  'Oldest to Recent Payments',
  'Recent to oldest Deliveries',
  'Oldest to Recent Payments',
]
const forSortByAmount = ['Highest to Lowest Amount', 'Lowest to Highest Amount']

const RetailarFilter = () => {
  const [scrin, setScrin] = useState('payement')
  const [title, setTitle] = useState('Payment Status')

  const _HendelChangeOptions = (title, scrin) => {
    setTitle(title)
    setScrin(scrin)
  }
  return (
    <div className="absolute right-1 top-10 bg-white h-80 w-[550px] shadow-lg shadow-gray-600 rounded-md !z-50">
      <div className="h-full w-full relative flex">
        <button className="bg-secondary absolute bottom-5 right-5 text-white px-5 py-2 rounded-md h">
          Applay Filter
        </button>
        <div className="w-1/2 border-r border-secondary">
          <div className="p-6">
            <div className="flex items-center hover:bg-sec_light hover:bg-opacity-20 pl-2">
              <input
                checked={scrin === 'payement'}
                id="payment"
                type="radio"
                value=""
                name="default-radio"
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300"
                onChange={() =>
                  _HendelChangeOptions('Payment Status', 'payement')
                }
              />
              <label
                htmlFor="payment"
                className="ml-2 text-secondary py-3 cursor-pointer"
              >
                Payment Status
              </label>
            </div>
            <div className="flex items-center hover:bg-sec_light hover:bg-opacity-20 pl-2">
              <input
                checked={scrin === 'delivery'}
                id="delivery"
                type="radio"
                value=""
                name="default-radio"
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300"
                onChange={() =>
                  _HendelChangeOptions('Delivery Status', 'delivery')
                }
              />
              <label
                htmlFor="delivery"
                className="ml-2 text-secondary  py-3 cursor-pointer"
              >
                Delivery Status
              </label>
            </div>
            <div className="flex items-center hover:bg-sec_light hover:bg-opacity-20 pl-2">
              <input
                checked={scrin === 'date'}
                id="date"
                type="radio"
                value=""
                name="default-radio"
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300"
                onChange={() => _HendelChangeOptions('Sort by Date', 'date')}
              />
              <label
                htmlFor="date"
                className="ml-2 text-secondary  py-3 cursor-pointer"
              >
                Sort by Date
              </label>
            </div>
            <div className="flex items-center hover:bg-sec_light hover:bg-opacity-20 pl-2">
              <input
                checked={scrin === 'amount'}
                id="amount"
                type="radio"
                value=""
                name="default-radio"
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300"
                onChange={() =>
                  _HendelChangeOptions('Sort by Amount', 'amount')
                }
              />
              <label
                htmlFor="amount"
                className="ml-2 text-secondary  py-3 cursor-pointer"
              >
                Sort by Amount
              </label>
            </div>
          </div>
        </div>
        <div className="w-1/2 relative">
          <button className="absolute right-3 top-2 hover:underline text-primary">
            Clear Filter
          </button>
          <div className="p-3 mt-5">
            <h1 className="text-secondary font-semibold">{title}</h1>
            <div className="mt-2 ml-3">
              {scrin === 'payement' &&
                forPayment.map((item, index) => (
                  <div key={index} className="flex items-center mb-4">
                    <input
                      id={item}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label htmlFor={item} className="ml-2">
                      {item}
                    </label>
                  </div>
                ))}

              {scrin === 'delivery' &&
                forDelivery.map((item, index) => (
                  <div key={index} className="flex items-center mb-4">
                    <input
                      id={item}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label htmlFor={item} className="ml-2">
                      {item}
                    </label>
                  </div>
                ))}

              {scrin === 'date' &&
                forSortByDate.map((item, index) => (
                  <div key={index} className="flex items-center mb-4">
                    <input
                      id={item}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                    />
                    <label htmlFor={item} className="ml-2">
                      {item}
                    </label>
                  </div>
                ))}

              {scrin === 'amount' &&
                forSortByAmount.map((item, index) => (
                  <div key={index} className="flex items-center mb-4">
                    <input
                      id={item}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                    />
                    <label htmlFor={item} className="ml-2">
                      {item}
                    </label>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RetailarFilter
