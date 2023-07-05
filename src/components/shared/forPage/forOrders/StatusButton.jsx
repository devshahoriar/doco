const StatusButton = ({ status }) => {
  let classNeams
  switch (status) {
    case 'active':
      classNeams = ' border-green-600 text-green-600'
      break
    case 'in progress':
      classNeams = 'border-yellow-600  text-yellow-600'
      break
    case 'delivered':
      classNeams = 'border-blue-600  text-blue-600'
      break
    case 'rejected':
      classNeams = 'border-red-600  text-red-600'
      break
    default:
      classNeams = 'border-green-600  text-green-600'
      break
  }
  return (
    <div className={`${classNeams} font-semibold px-3 border  h-fit`}>
      {status.toUpperCase()}
    </div>
  )
}

export default StatusButton
