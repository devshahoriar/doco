import { FiPlus } from 'react-icons/fi'
import pimg from './roundEmptyPre.png'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const RoundImageSelect = ({ className }) => {
  const [img, setImg] = useState(null)
  const previewImage = useRef(null)
  const inp = useRef(null)

  useEffect(() => {
    if (img !== null) {
      const reader = new FileReader()
      reader.onload = (e) => {
        previewImage.current.src = e.target.result
      }
      reader.readAsDataURL(img)
    }
  }, [img])

  return (
    <div
      className={`${className} h-12 w-12  relative rounded-full border-primary border`}
    >
      <input
        onChange={(e) => setImg(e.target.files[0])}
        ref={inp}
        type="file"
        multiple={false}
        accept="image/*"
        className="hidden"
        hidden
      />
      <div className="w-full h-full overflow-hidden flex justify-center items-center rounded-full">
        <img
          ref={previewImage}
          src={pimg}
          alt="preview"
          className=" object-cover"
        />
      </div>
      <button
        onClick={() => inp?.current?.click()}
        className="absolute bg-primary rounded-full bottom-0 right-0 text-white hover:opacity-70"
      >
        <FiPlus className="" />
      </button>
    </div>
  )
}

export default RoundImageSelect
