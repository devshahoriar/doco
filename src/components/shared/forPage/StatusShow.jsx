const StatusShow = ({ stObj, status }) => {
  return <div className={`${stObj[status]} border px-2`}>{status.toUpperCase()}</div>
}

export default StatusShow
