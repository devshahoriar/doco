import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { IoMdLock } from 'react-icons/io'
import {
  Input,
  LoginSubmitButton,
  TitleText,
} from '../components/shared/forPage/forLoginReg/LogInRegElement'
import { useEffect } from 'react'

const Registration = () => {
  const [scrin, setScrin] = useState('first')
  const [err, setErr] = useState('')

  const [mobileNumber, setMobileNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [pincode, setPincode] = useState('')

  const _hendelSubmit = () => {
    alert('Registration Successfull')
  }

  useEffect(() => {
    setErr('')
  }, [scrin])

  return (
    <div>
      <TitleText>Create Account</TitleText>

      {scrin === 'first' && (
        <div>
          <div className="h-72 flex items-center">
            <Input
              hendelChange={(n) => setMobileNumber(n)}
              type="tel"
              palceHolder="Mobile Number"
              icon={<MdEmail />}
              value={mobileNumber}
            />
          </div>

          <LoginSubmitButton
            onClick={() => {
              if (mobileNumber !== '') {
                setScrin('second')
                return
              } else {
                setErr('Please enter your mobile number.')
              }
            }}
          >
            Send OTP
          </LoginSubmitButton>
          <p className="mt-4 h-6 text-red-600">{err}</p>
        </div>
      )}

      {scrin === 'second' && (
        <div>
          <div className="h-72 flex justify-center flex-col">
            <p className="opacity-50 mb-10"> OTP sent to {mobileNumber}</p>
            <Input
              hendelChange={(n) => setOtp(n)}
              type="text"
              palceHolder="OTP"
              icon={<MdEmail />}
            />
            <div className="flex justify-between">
              <p
                className="text-primary hover:opacity-50 select-none cursor-pointer"
                onClick={() => setScrin('first')}
              >
                Change Mobile No.
              </p>
              <p className="text-primary  hover:opacity-50 select-none">
                Resend OTP
              </p>
            </div>
          </div>

          <LoginSubmitButton
            onClick={() => {
              if (otp !== '') {
                setScrin('third')
                return
              } else {
                setErr('Please enter OTP.')
              }
            }}
          >
            Next
          </LoginSubmitButton>
          <p className="mt-4 h-6 text-red-600">{err}</p>
        </div>
      )}

      {scrin === 'third' && (
        <div>
          <div className="h-72 flex flex-col justify-center">
            <Input
              hendelChange={(n) => setBusinessName(n)}
              type="tel"
              palceHolder="Business Name"
              icon={<MdEmail />}
            />
            <Input
              hendelChange={(n) => setPincode(n)}
              type="tel"
              palceHolder="Pincode"
              icon={<IoMdLock />}
            />
          </div>

          <LoginSubmitButton onClick={_hendelSubmit}>
            Create Account
          </LoginSubmitButton>
          <p className="mt-4 h-6 text-red-600">{err}</p>
        </div>
      )}
    </div>
  )
}

export default Registration
