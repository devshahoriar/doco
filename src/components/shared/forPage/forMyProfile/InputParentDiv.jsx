const InputParentDiv = ({ children, title,w='w-[350px]' }) => {
  return (
    <div className={` flex flex-col gap-3 ${w}`}>
      <h1 className="">{title}</h1>
      {children}
    </div>
  )
}

export default InputParentDiv
