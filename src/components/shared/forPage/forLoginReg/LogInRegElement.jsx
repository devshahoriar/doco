/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import img from './pana.png'
export const Pana = () => {
  return (
    <img
      src={img}
      alt=""
      className="w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-[35rem]"
    />
  )
}

export const Input = ({
  type,
  palceHolder,
  icon,
  isWrong,
  hendelChange,
  ...rest
}) => {
  return (
    <div className="flex items-center border-2 border-[#797979] my-3 rounded-md">
      <span className="text-[#797979] text-2xl mx-3">{icon}</span>
      <input
        onChange={(e) => hendelChange(e.target.value)}
        type={type}
        placeholder={palceHolder}
        className="outline-none border-none mx-1 py-3 text-2xl"
        {...rest}
      />
    </div>
  )
}

export const From = ({ children, hendel }) => {
  return (
    <div className="py-5">
      <form onSubmit={hendel}>{children}</form>
    </div>
  )
}

export const LoginSubmitButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-white text-2xl py-3 w-full rounded-md active:scale-95"
    >
      {children}
    </button>
  )
}

export const TextLink = ({ children, to }) => {
  return (
    <Link to={to} className="text-primary">
      <p className="w-full">{children}</p>
    </Link>
  )
}

export const TitleText = ({ children }) => {
  return <h1 className="text-2xl 2xl:text-4xl font-semibold">{children}</h1>
}
