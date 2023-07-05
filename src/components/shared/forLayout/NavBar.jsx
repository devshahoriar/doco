import IconButton from '../buttons/IconButton'
import disLogo from '../../../assets/logos/distributorlogo.png'
import { RiMenuAddFill } from 'react-icons/ri'
import { MdAddShoppingCart } from 'react-icons/md'
import { FiShoppingCart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div className="h-[70px] shadow-md shadow-[#00000022] flex justify-between items-center px-5">
      <aside className="flex">
        <img src={disLogo} alt="" className="w-[50px] h-[50px]" />
        <div className="leading-none flex flex-col justify-center ml-3 ">
          <h1 className="font-bold">ABC Enterprises</h1>
          <p className="text-sm">Goregaon East, Mumbai / GST No. </p>
        </div>
        <div className="ml-10 flex items-center space-x-4">
          <IconButton title="Add Inventory" icon={<RiMenuAddFill />} />
          <IconButton title="Add Order" icon={<MdAddShoppingCart />} />
        </div>
      </aside>
      <aside className="flex justify-center items-center gap-4">
        <button className="h-[50px] w-[50px] bg-pri_light1 rounded-full text-2xl flex justify-center items-center relative text-pri_dark1 active:opacity-90">
          <span className="absolute bg-primary rounded-3xl text-sm text-white top-2 right-2">
            10
          </span>
          <FiShoppingCart />
        </button>
        <button className="active:opacity-90" onClick={()=> navigate('/profile')} >
          <img
            src="https://source.unsplash.com/random/?man"
            alt="Avater"
            className="h-[50px] w-[50px] object-cover rounded-full border-2 border-primary"
          />
        </button>
      </aside>
    </div>
  )
}

export default NavBar
