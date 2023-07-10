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

const authData = {
  message: 'success',
  status: '200',
  success: true,
  code: 'success',
  errors: [],
  data: {
    access_token:
      'e14a37cf-fb9c-4f0d-bbf8-c108b6eb3e38-b9e97ac3-5ac9-41e0-8bee-35b095b56ee8-26c13ed2-ef7a-49df-91c7-d4eb0607c7d1',
    refresh_token:
      '38f43468-8100-4aac-b606-b176e5a85c04-4cd2275e-8cb1-4caa-ae23-df7647fe5150-f21c37cc-468d-4162-9023-bb621634e592',
    profile: {
      user_id: '7995cd64-4e2f-4d3e-99f2-593744be68b0',
      name: 'Charlie Runolfsdottir',
      profile_picture: 'http://placeimg.com/640/480',
      role: 'DISTRIBUTOR',
      tenant_id: 'eeeebdd5-51e0-4217-af58-8dc0007f61ef',
    },
  },
}

const Login = () => {
  const [phone, setPhone] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')
  const navigate = useNavigate()
  const isAuth = useAuth()
  let [searchParams] = useSearchParams()

  const _hendelSubmit = async (e) => {
    e.preventDefault()
    setErr('')
    if (!phone || !pass) {
      setErr('Please fill all the fields')
      return
    }
    try {
      // const { data } = await axios({
      //   method: 'post',
      //   url: 'https://admin.mydoco.in/api/v1/auth/login/',
      //   data: {
      //     username: phone,
      //     password: pass,
      //   },
      //   headers: {
      //     'Content-Type': 'application/json',
      //     // Cookie: 'csrftoken=Fm50Mi2KRZJ1chyPnbRXrTfOj5ARytWz',
      //   },
      // })

      setErr('login useing example data . Login in 3s.')
      setTimeout(() => {
        new Promise((resolve, reject) => {
          resolve(authData)
        }).then((data) => {
          localStorage.setItem('user', JSON.stringify(data?.data))
          if (searchParams.get('r')) {
            navigate(searchParams.get('r'), { replace: true })
            return
          }
          navigate('/', { replace: true })
          return
        })
      }, 3000)

      // localStorage.setItem('user', JSON.stringify(data?.data))
      // if (searchParams.get('r')) {
      //   navigate(searchParams.get('r'), { replace: true })
      //   return
      // }
      // navigate('/', { replace: true })
    } catch (error) {
      setErr('Invalid Credentials')
    }
  }

  useEffect(() => {
    if (isAuth) {
      navigate('/', { replace: true })
    }
  }, [])

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
