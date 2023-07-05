import { useDispatch } from 'react-redux'
import DecoButton from './buttons/DecoButton'
import Divider from './Divider'
import { setSelectedProduct } from '../../redux/slice/invenrotyPageSlice'

const ItemProductInventory = ({ selected, data }) => {
  const dispatch = useDispatch()
  const {
    image,
    name,
    description,
    product_id,
    has_offer,
    price,
    inventory,
    mrp,
  } = data

  return (
    <>
      <div
        onClick={() => dispatch(setSelectedProduct(data))}
        className={`${
          selected && ' !border-sec_light bg-sec_light'
        } p-3 rounded-md w-full bg-opacity-10 hover:bg-opacity-10 my-3 cursor-pointer hover:border-sec_light hover:bg-sec_light group transition-colors border border-transparent`}
      >
        <div className="flex justify-between">
          <div className="flex justify-between w-full ">
            <div className="flex">
              <img
                src={image}
                className="h-[70px] w-[70px] object-cover"
                alt="product image"
              />
              <div className="font-thin ml-4">
                <h1 className="font-bold">{name}</h1>
                <p>
                  ${price?.base_unit}{' '}
                  <span className="line-through opacity-50">
                    ${price?.pack_unit}
                  </span>
                </p>
                <p>Mrp {mrp?.base_unit}</p>
              </div>
            </div>
            <span className="bg-white h-fit border text-secondary border-sec_light rounded-sm px-1">
              {inventory[0]?.quantity} Units
            </span>
          </div>
        </div>
        {/* <div
          className={`flex justify-between ${
            selected
              ? 'bg-white border border-sec_light'
              : 'bg-primary bg-opacity-10'
          } items-center px-2 py-3 rounded-md mt-3 group-hover:bg-white border group-hover:border-sec_light transition-colors`}
        >
          <div>
            <h1>Buy on ₹6,000 with BIZ08 +7% extra</h1> <p>Click above 1,600</p>
          </div>
          <DecoButton
            title="View All Offer"
            className={`!px-2 ${
              selected ? 'bg-secondary' : 'bg-primary'
            } text-white hover:bg-secondary`}
          />
        </div> */}
      </div>
      <Divider />
    </>
  )
}

export default ItemProductInventory
