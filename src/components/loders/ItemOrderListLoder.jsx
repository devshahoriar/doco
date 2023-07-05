import ItemAnimate from './ItemAnimate'

const ItemOrderListLoder = () => {
  return (
    <div className='mb-6'>
      <div className='flex justify-between items-center'>
        <div className="flex gap-3 items-center">
          <ItemAnimate className="!h-10 w-10 rounded-lg" />
          <ItemAnimate className="!h-6 !w-40" />
        </div>

        <ItemAnimate className="h-8 w-24" />
      </div>
      <div className='mt-3 space-y-2'>
        <ItemAnimate className="!h-5"/>
        <ItemAnimate className="!h-5"/>
        <ItemAnimate className="!h-5"/>
      </div>
    </div>
  )
}

export default ItemOrderListLoder
