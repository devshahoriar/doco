const TspInput = ({ placeholder, w = 'w-full' }) => {
  return (
    <input
      placeholder={placeholder}
      type="text"
      className={`bg-black bg-opacity-5 px-2  text-primary outline-none block ${w}`}
    />
  )
}

export const TspSelect = () => {
  return (
    <select defaultValue='df' className="w-52 px-2 bg-black bg-opacity-5 py-1">
      <option value='df'>Choose gender</option>
      <option value="man">Man</option>
      <option value="woman">Woman</option>
      <option value="other">Other</option>
    </select>
  )
}

export default TspInput
