import { AiFillCloseSquare, AiOutlineSearch } from 'react-icons/ai'

const InnerPageSearchBar = ({ set,placeHolder }) => {
  return (
    <div className="flex w-full">
      <div className="flex w-full bg-primary bg-opacity-25 items-center p-1 rounded-md border border-primary">
        <AiOutlineSearch className="text-2xl mr-2" />

        <input
          className="w-full bg-transparent border-none outline-none placeholder:text-stone-700"
          type="text"
          placeholder={placeHolder}
        />
      </div>
      <button
        onClick={() => set((p) => !p)}
        className="text-4xl text-primary hover:text-secondary "
      >
        <AiFillCloseSquare />
      </button>
    </div>
  )
}

export default InnerPageSearchBar
