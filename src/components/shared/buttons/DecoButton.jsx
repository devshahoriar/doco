const DecoButton = ({ title, onClick, className }) => {
  return (
    <button
      className={`bg-pri_light1 hover:bg-primary hover:text-white active:opacity-80 active:scale-95 text-primary rounded-md px-4 py-1 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default DecoButton
