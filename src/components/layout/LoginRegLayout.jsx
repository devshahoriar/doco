import { Outlet } from 'react-router-dom'
import { Pana } from '../shared/forPage/forLoginReg/LogInRegElement'


const LoginRegLayout = () => {
  return (
    <div className="flex">
      <div className="w-[40%] bg-primary bg-opacity-5 h-screen p-10 relative">
        <div>
          <img src="/logo.png" alt="" className="object-cover w-32 2xl:w-48" />
          <h1 className="text-sm mt-4 2xl:text-base text-primary">
            Empowering Distributors for next Gen E-Com.
          </h1>
        </div>
        <Pana />
      </div>
      <div className="w-[60%] flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  )
}

export default LoginRegLayout
