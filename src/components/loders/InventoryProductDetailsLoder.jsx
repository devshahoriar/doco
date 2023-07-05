import InnerBlockParent from '../shared/innerPageElement/InnerBlockParent'
import InnerPageBlockLeft from '../shared/innerPageElement/InnerPageBlockLeft'
import ItemAnimate from './ItemAnimate'

const InventoryProductDetailsLoder = () => {
  return (
    <>
      <div className="w-[30%]">
        <div className="flex items-center">
          <ItemAnimate className="h-[70px] w-[70px] object-cover rounded-sm overflow-hidden" />

          <ItemAnimate className="ml-4 w-24" />
        </div>

        <ItemAnimate className="w-[90%] mt-3" />
        <ItemAnimate className="w-[80%] mt-2" />
        <ItemAnimate className="w-[95%] mt-2" />
      </div>
      <InnerBlockParent>
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <ItemAnimate className="h-full rounded-md" key={i} />
          ))}
      </InnerBlockParent>
    </>
  )
}

export default InventoryProductDetailsLoder
