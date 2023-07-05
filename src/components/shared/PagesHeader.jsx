const PagesHeader = ({ title, subtitle, button }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-4 uppercase font-bold">
        <h1>{title}</h1>
        {subtitle && <h1 className="opacity-30">|</h1>}
        {subtitle && <h1>{subtitle}</h1>}
      </div>

      {button && <div>{button}</div>}
    </div>
  )
}

export default PagesHeader
