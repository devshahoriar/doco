const IconButton = ({ title, icon, className }) => {
  return (
    <button
      className={`bg-primary text-white text-base px-3 py-2 rounded-md hover:bg-pri_dark1 flex items-center gap-2 active:bg-pri_dark2 active:scale-95 ${className}`}
    >
      {icon}
      {title}
    </button>
  )
}

export default IconButton
