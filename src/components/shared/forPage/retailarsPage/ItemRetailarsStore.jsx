import { useState } from 'react'
import Divider from '../../Divider'
import StatusShow from '../StatusShow'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { setSelectedRetailar } from '../../../../redux/slice/retailarPageSlice'

const statusStyleObj = {
  active: 'border-green-600 text-green-500',
  blocked: 'border-red-600 text-red-500',
}

const ItemRetailarsStore = ({ item, select }) => {
  const dispatch = useDispatch()
  const { name, outstanding, credit_score, last_order, active } = item || {}
  return (
    <div className="mb-4 border-b border-stone-400 pb-3 ">
      <div
        onClick={() => dispatch(setSelectedRetailar(item))}
        className={`border border-transparent hover:border-sec_light p-2 rounded-md ${
          select ? '!border-sec_light' : ''
        } cursor-pointer`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://source.unsplash.com/random/?logo"
              alt=""
            />
            <p className="font-semibold ml-3">{name}</p>
          </div>
          <div>
            <StatusShow
              stObj={statusStyleObj}
              status={active ? 'active' : 'blocked'}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <table className="table-fixed">
              <tbody>
                <tr>
                  <td className="w-28">Credit Score</td>
                  <td>{credit_score}</td>
                </tr>
                <tr>
                  <td>Out standing</td>
                  <td>₹{outstanding}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="self-end">
            <p>
              <span className="font-semibold">Last Order:</span>{' '}
              {moment(last_order).format('DD MMM, YY')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemRetailarsStore
