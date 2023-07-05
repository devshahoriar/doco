import ItemAnimate from '../../../loders/ItemAnimate'

const OrderDetailsTableLoder = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-6">
        <div className="flex flex-col w-72 gap-2">
          <ItemAnimate />
          <ItemAnimate />
        </div>
        <div className="flex gap-3 w-72">
          <ItemAnimate className="w-52 !h-10" />
          <ItemAnimate className="w-52 !h-10" />
        </div>
      </div>
      <div className='flex flex-col gap-3 mt-6'>
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <ItemAnimate key={index} />
          ))}
      </div>
    </div>
  )
}

export default OrderDetailsTableLoder
