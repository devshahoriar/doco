import Divider from '../shared/Divider'
import ItemAnimate from './ItemAnimate'

const ItemRetailerStoreLoder = () => {
  return (
    <div className='mb-2'>
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-between">
          <ItemAnimate className="!h-12 !w-12 rounded-full" />
          <ItemAnimate className="w-36 ml-5" />
        </div>
        <ItemAnimate className="w-20" />
      </div>
      <ItemAnimate className="w-40 mt-1" />
      <ItemAnimate className="mt-1" />
      <Divider className="mt-2"/>
    </div>
  )
}

export default ItemRetailerStoreLoder
