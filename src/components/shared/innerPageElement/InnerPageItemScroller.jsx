const InnerPageItemScroller = ({ children }) => {
  return (
    <div className="h-[calc(100vh-290px)] overflow-hidden overflow-y-scroll  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-pri_light2 ml-3 pr-2 mt-4">
      {children}
    </div>
  )
}

export default InnerPageItemScroller
