const InnerPageLeftScroller = ({ children }) => {
  return (
    <div className="w-full overflow-hidden overflow-y-scroll  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-pri_light2 h-[calc(100vh-170px)]">
      {children}
    </div>
  )
}

export default InnerPageLeftScroller
