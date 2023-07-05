const InnerpageRight = ({ className = null, children }) => {
  return (
    <div className={`${className ? className : ""} border-r border-primary min-w-[450px] w-[500px] max-w-[550px]`}>
      {children}
    </div>
  )
}

export default InnerpageRight
