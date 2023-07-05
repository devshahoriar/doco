import { AiFillCompass } from 'react-icons/ai'
import { BiRupee } from 'react-icons/bi'
import { BsShop } from 'react-icons/bs'
import { HiHome } from 'react-icons/hi'
import { IoIosListBox } from 'react-icons/io'
import { MdInventory } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi'
import { Menu, MenuItem, Sidebar, useProSidebar } from 'react-pro-sidebar'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import sidebarLogo from '../../../assets/logos/sidebarlogo.png'

const SideBar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { collapsed, toggleSidebar, collapseSidebar } = useProSidebar()
  return (
    <div
      className={`flex h-[100vh] !z-50  relative ${
        collapsed ? 'w-[80px]' : 'w-[300px]'
      } transition-all`}
    >
      <button
        onClick={() => collapseSidebar()}
        className="absolute z-[100] -right-2 text-2xl top-24 bg-white rounded-full"
      >
        {!collapsed ? <TfiArrowCircleLeft /> : <TfiArrowCircleRight />}
      </button>
      <Sidebar
        defaultCollapsed={true}
        backgroundColor="#41225B"
        width="300px"
        collapsedWidth="80px"
        transitionDuration={200}
      >
        <div>
          <div className="flex items-center mt-6 ml-6 logoDiv">
            <img
              className="w-[50px] h-[50px]"
              src={sidebarLogo}
              alt="side bar logo"
            />
            {!collapsed && (
              <h1 className="text-white text-4xl font-bold ml-4">doco</h1>
            )}
          </div>
        </div>
        <div className="mt-20 relative">
          <Menu>
            <MenuItem
              active={pathname === '/'}
              icon={<HiHome />}
              onClick={() => navigate('/')}
            >
              Home
            </MenuItem>
            <MenuItem
              active={pathname === '/invetory'}
              icon={<MdInventory />}
              onClick={() => navigate('/invetory')}
            >
              Inventory
            </MenuItem>
            <MenuItem
              active={pathname === '/retailers'}
              icon={<BsShop />}
              onClick={() => navigate('/retailers')}
            >
              Retailer
            </MenuItem>
            <MenuItem
              active={pathname === '/fleetuser'}
              icon={<TbTruckDelivery />}
              onClick={() => navigate('/fleetuser')}
            >
              Fleet User
            </MenuItem>
            <MenuItem
              active={pathname === '/orders'}
              icon={<IoIosListBox />}
              onClick={() => navigate('/orders')}
            >
              Orders
            </MenuItem>
            {/* <MenuItem
              active={pathname === '/beat'}
              icon={<AiFillCompass />}
              onClick={() => navigate('/beat')}
            >
              Beat
            </MenuItem> */}
            <MenuItem
              active={pathname === '/cashcollection'}
              icon={<BiRupee />}
              onClick={() => navigate('/cashcollection')}
            >
              Cash Collection
            </MenuItem>
          </Menu>
        </div>
      </Sidebar>
    </div>
  )
}

export default SideBar
