import { useRef } from 'react'
import { FiPlus } from 'react-icons/fi'

const ButtonInputImage = ({onChange}) => {
  const inRef = useRef(null)
  return (
    <div onClick={() => inRef.current.click()}  className="bg-primary text-white h-5 w-5 flex justify-center items-center font-bold rounded-full cursor-pointer hover:opacity-70">
      <input onChange={(e) => onChange(e.target.files[0])} ref={inRef} type="file" className="hidden" multiple={false} accept="image/*" />
      <FiPlus />
    </div>
  )
}

export default ButtonInputImage
