const InnerPageTabs = ({
  children,
  action,
  borderColor = 'border-sec_light',
  className
}) => {
  return (
    <div
      className={`w-full border-b relative flex border-opacity-30 justify-between ${borderColor} ${className}`}
    >
      <div>{children}</div>
      {action && <div>{action}</div>}
    </div>
  )
}

export default InnerPageTabs
