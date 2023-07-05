import { useState } from 'react'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { useSelector } from 'react-redux'

const ApplyFilterBtn = ({ children }) => {
  const [viewOptions, setViewOptions] = useState(false)
  return (
    <div className="relative">
      <button
        onClick={() => setViewOptions((p) => !p)}
        className={`bg-primary bg-opacity-25 text-primary flex items-center gap-2 px-2 py-1 rounded-3xl font-semibold border border-transparent hover:border-primary active:scale-95 text-sm ${
          viewOptions && '!border-primary'
        }`}
      >
        <HiBars3BottomLeft />
        Apply Filter
      </button>
      {viewOptions && children}
    </div>
  )
}

export const FilterBody = ({ children }) => {
  return (
    <div className="absolute z-20 bg-white border border-stone-400 shadow-xl w-40 p-2 mt-3 rounded-md">
      {children}
    </div>
  )
}

export const FilterRedio = ({ title, onUpdate }) => {
  const { filterOptionSelsMer } = useSelector((s) => s.homePage)
  return (
    <div className="flex items-center  my-1 p-1 bg-primary bg-opacity-0 hover:bg-opacity-25 cursor-pointer">
      <input
        checked={filterOptionSelsMer === title}
        onChange={onUpdate}
        type="radio"
        name="filter"
        value={title}
        id={title}
        className="w-5 h-5 block text-primary appearance-none border border-primary rounded-full checked:bg-primary checked:border-transparent focus:outline-none"
      />

      <label htmlFor={title} className="text-primary font-medium ml-2">
        {title}
      </label>
    </div>
  )
}

export const FilterClearBtn = ({ setCler }) => {
  return (
    <div className="w-full flex justify-end">
      <button
        onClick={setCler}
        className="opacity-60 hover:opacity-100 active:scale-95"
      >
        Clear Filter
      </button>
    </div>
  )
}

export default ApplyFilterBtn
