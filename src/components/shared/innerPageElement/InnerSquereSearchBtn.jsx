import { AiOutlineSearch } from "react-icons/ai"

const InnerSquereSearchBtn = ({btnOnClick}) => {
  return (
    <button onClick={btnOnClick} className="bg-pri_light1 h-7 w-7 text-primary border border-pri_dark1 flex justify-center items-center rounded-md hover:bg-primary hover:text-white">
      <AiOutlineSearch />
    </button>
  )
}

export default InnerSquereSearchBtn
