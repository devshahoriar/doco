const AddInfoButton = ({ children = 'Save Changes', className }) => {
  return (
    <button className={`bg-primary mt-10 px-3 py-2 text-white rounded-md hover:opacity-75 active:scale-95 disabled:bg-[#808080] ${className}`}>
      {children}
    </button>
  )
}

export default AddInfoButton
