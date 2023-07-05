import Divider from '../../Divider'
import StatusShow from '../StatusShow'

const statusStyleObj = {
  active: 'border-green-600 text-green-500',
  blocked: 'border-red-600 text-red-500',
}

const FleetItemUser = () => {
  return (
    <div className='hover:bg-sec_light hover:bg-opacity-20 p-1 select-none cursor-pointer rounded-md border border-transparent hover:border-sec_light'>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={'https://source.unsplash.com/random/?shop'}
            className="h-[40px] w-[40px] object-cover rounded-full"
            alt="shop image"
          />
          <h1 className="ml-3 font-semibold text-pri_dark1">
            Cameron Williamson
          </h1>
        </div>
        <div>
          <StatusShow stObj={statusStyleObj} status="active" />
        </div>
      </div>
      <div className="mt-2">
        <table className="table-fixed text-primary">
          <tbody>
            <tr>
              <td className="w-28">Credit Score</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Outstanding</td>
              <td>$16,579</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Divider className="my-3" borderColor="!border-gray-300" />
    </div>
  )
}

export default FleetItemUser
