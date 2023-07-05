const Divider = ({ className, borderColor }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className={`border-b border-stone-500 w-[95%] ${borderColor}`}></div>
    </div>
  )
}

export default Divider
