import { ProSidebarProvider } from 'react-pro-sidebar'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import About from './pages/About'
// import Beat from './pages/Beat'
import CashCollection from './pages/CashCollection'
import FleetUsers from './pages/FleetUsers'
import Home from './pages/Home'
import Invetory from './pages/Invetory'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Orders from './pages/Orders'
import Registration from './pages/Registration'
import Retailers from './pages/Retailers'
import store from './redux/store'
import { useMediaQuery } from 'usehooks-ts'
import LoginRegLayout from './components/layout/LoginRegLayout'
import MyProfile from './pages/MyProfile'

function App() {
  const matches = useMediaQuery('(max-width: 1365px)')
  return (
    <Provider store={store}>
      {matches ? (
        <div className="h-screen w-screen bg-black flex items-center justify-center">
          <h1 className="linear-wipe w-[50%] text-center text-4xl font-bold">
            This apps not optimized for 1366px bellow wide monitor. Please use
            1366px or above wide monitor.
          </h1>
        </div>
      ) : (
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/invetory" element={<Invetory />} />
                <Route path="/retailers" element={<Retailers />} />
                <Route path="/fleetuser" element={<FleetUsers />} />
                <Route path="/orders" element={<Orders />} />
                {/* <Route path="/beat" element={<Beat />} /> */}
                <Route path="/cashcollection" element={<CashCollection />} />
                <Route path="/profile" element={<MyProfile />} />
              </Route>
              <Route path="/" element={<LoginRegLayout />}>
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Registration />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      )}
    </Provider>
  )
}

export default App
