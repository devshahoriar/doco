const InnerPageLayout = ({ className, children }) => {
  return (
    <div
      className={`${
        className ? className : ''
      } w-full mt-6 border border-primary flex`}
    >
      {children}
    </div>
  )
}

export default InnerPageLayout
