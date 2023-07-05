const SelectButton = ({ title, onClick, selected}) => {
 
  return (
    <button
      className={`${
        selected ? 'bg-primary text-white' : 'bg-pri_light1 text-primary'
      } hover:bg-primary hover:text-white active:opacity-80 active:scale-95  rounded-md px-2 py-1 border border-primary text-sm`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default SelectButton
