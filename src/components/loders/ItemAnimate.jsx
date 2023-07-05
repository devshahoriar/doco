const ItemAnimate = ({className}) => {
  return (
    <div
      className={`animate-pulse bg-gray-400 h-6 ${className ? className : ""}`}
      style={{ animationDuration: 0.5+ Math.random() * 6 + 's' }}
    ></div>
  )
}

export default ItemAnimate
