import { useEffect } from 'react'
import { useRef } from 'react'
import { BsFillCloudUploadFill } from 'react-icons/bs'

const GovtCardPreview = ({ selectImage, onChange, title }) => {
  const inRef = useRef(null)
  const preRef = useRef(null)
  useEffect(() => {
    if (selectImage !== null) {
      const reader = new FileReader()
      reader.onload = (e) => {
        preRef.current.src = e.target.result
      }
      reader.readAsDataURL(selectImage)
    }
  }, [selectImage])
  return (
    <div
      onClick={() => inRef.current.click()}
      className="border border-primary aspect-video h-40 rounded-md cursor-pointer hover:opacity-70 overflow-hidden"
    >
      <input
        onChange={(e) => onChange(e.target.files[0])}
        ref={inRef}
        type="file"
        className="hidden"
        multiple={false}
        accept="image/*"
      />
      {selectImage === null ? (
        <div className="w-full h-full flex justify-center items-center flex-col text-primary">
          <BsFillCloudUploadFill className="text-3xl" />
          <h1 className="mt-3">{title}</h1>
        </div>
      ) : (
        <img ref={preRef} className='w-full h-full object-cover' alt="Preview" />
      )}
    </div>
  )
}

export default GovtCardPreview
