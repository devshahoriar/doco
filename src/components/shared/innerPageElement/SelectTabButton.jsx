const SelectTabButton = ({ state, title, set, count = '',colorType='secondary' }) => {
  return (
    <button
      onClick={() => set(title?.toLowerCase())}
      className={` pb-3 mr-10 px-3 text-${colorType} font-semibold ${
        state === title?.toLowerCase()
          ? `border-b border-${colorType}`
          : 'opacity-60 text-black'
      }`}
    >
      {title} {count && <span>({count})</span>}
    </button>
  )
}

export default SelectTabButton
