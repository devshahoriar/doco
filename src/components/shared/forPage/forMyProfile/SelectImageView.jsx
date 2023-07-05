import { useEffect } from 'react'
import { useRef } from 'react'

const SelectImageView = ({ selectImage,round='rounded-full',bgImg="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" }) => {
  const reImage = useRef(null)
  useEffect(() => {
    if (selectImage !== null) {
      const reader = new FileReader()
      reader.onload = (e) => {
        reImage.current.src = e.target.result
      }
      reader.readAsDataURL(selectImage)
    }
  }, [selectImage])
  return (
    <img
      ref={reImage}
      src={bgImg}
      alt=""
      className={`object-cover w-full h-full ${round}`}
    />
  )
}

export default SelectImageView
