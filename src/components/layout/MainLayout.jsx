import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../utils/hooks/useAuth'
import NavBar from '../shared/forLayout/NavBar'
import SideBar from '../shared/forLayout/SideBar'

const MainLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isAuth = useAuth()
  useEffect(() => {
    if (!isAuth) {
      navigate('/signin?r=' + location.pathname, { replace: true })
    }
  }, [])

  if (!isAuth) {
    return null
  }

  return (
    <>
      <div className="fixed z-50">
        <SideBar />
      </div>
      <div className="ml-[80px]">
        <NavBar />
      </div>
      <main className="flex ml-[80px] overflow-x-hidden">
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
