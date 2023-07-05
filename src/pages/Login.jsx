/* eslint-disable react/no-unescaped-entities */

import { MdEmail } from 'react-icons/md'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { HiLockClosed } from 'react-icons/hi'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  From,
  Input,
  LoginSubmitButton,
  TextLink,
  TitleText,
} from '../components/shared/forPage/forLoginReg/LogInRegElement'
import useAuth from '../utils/hooks/useAuth'

const Login = () => {
  const [phone, setPhone] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')
  const navigate = useNavigate()
  const isAuth = useAuth()
  let [searchParams]= useSearchParams()
 

  const _hendelSubmit = async (e) => {
    e.preventDefault()
    setErr('')
    if (!phone || !pass) {
      setErr('Please fill all the fields')
      return
    }
    try {
      const { data } = await axios({
        method: 'post',
        url: 'https://admin.mydoco.in/api/v1/auth/login/',
        data: {
          username: phone,
          password: pass,
        },
        headers: {
          'Content-Type': 'application/json',
          // Cookie: 'csrftoken=Fm50Mi2KRZJ1chyPnbRXrTfOj5ARytWz',
        },
      })
     
      localStorage.setItem('user', JSON.stringify(data?.data))
      if(searchParams.get('r')){
        navigate(searchParams.get('r'), { replace: true })
        return
      }
      navigate('/', { replace: true })
    } catch (error) {
      setErr('Invalid Credentials')
    }
  }

  useEffect(()=>{
    if(isAuth){
      navigate('/', { replace: true })
    }
  },[])


  return (
    <div>
      <TitleText>Log In</TitleText>
      <From hendel={_hendelSubmit}>
        <Input
          type="tel"
          palceHolder="Mobile Number"
          icon={<MdEmail />}
          hendelChange={(v) => setPhone(v)}
        />
        <Input
          type="password"
          palceHolder="Password"
          icon={<HiLockClosed />}
          hendelChange={(v) => setPass(v)}
        />
        <div className="flex justify-between my-5">
          <span className="text-red-600">{err}</span>
          <TextLink to="/reset">Forgot Password?</TextLink>
        </div>
        <LoginSubmitButton>Log In</LoginSubmitButton>
      </From>

      <div className="flex gap-2">
        Not a member?
        <TextLink to="/signup">Create an Account</TextLink>
      </div>
    </div>
  )
}

export default Login
