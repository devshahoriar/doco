import { BsTelephoneFill } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import Divider from '../../Divider'
import DocoButton from '../../buttons/DecoButton'

const UserDetailsItem = ({
  title = 'something',
  deta = 'dsdfsdf',
  className,
}) => {
  return (
    <div
      className={`${className} bg-white flex flex-col justify-center text-center rounded-md p-2`}
    >
      <p className='text-secondary'>{title}</p>
      <Divider borderColor="!border-secondary" />
      <p className='text-secondary text-[0.76em]'>{deta}</p>
    </div>
  )
}

export const UserDetails = () => {
  return (
    <div className="flex justify-between border border-sec_light p-3 rounded-md bg-sec_light bg-opacity-20">
      <div>
        <div className="flex items-center">
          <img
            src="https://picsum.photos/100/100"
            alt=""
            className="h-12 w-12 rounded-full"
          />
          <div className="ml-4">
            <h1 className="font-bold">Cameron Williamson</h1>
            <p className="text-sm">Business Executive</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="font-semibold text-sm">Employee ID: 1012</h2>
          <div className="flex gap-2">
            <BsTelephoneFill className="text-secondary bg-sec_light p-1 text-2xl bg-opacity-30 rounded-sm" />
            <p className="text-sm">+91 11909 26385</p>
          </div>
          <div className="flex gap-2">
            <MdOutlineAlternateEmail className="text-secondary bg-sec_light p-1 text-2xl bg-opacity-30 rounded-sm" />
            <p className="text-sm">cameron.williamson@example.com</p>
          </div>
        </div>
      </div>
      <div className="grid-cols-4 grid grid-rows-2 gap-4 mx-2">
        <UserDetailsItem title="Beat" deta="-" />
        <UserDetailsItem
          title="Address"
          deta="141/3, Ashow Towers, Wing-B, Marol, Andehri East, Mumbai"
          className="col-span-3"
        />
        <UserDetailsItem title="Role" deta="BDE,CC" />
        <UserDetailsItem
          title="Brand Name"
          deta="Hindustan Uniliver"
          className="col-span-3"
        />
      </div>
      <div className="flex flex-col gap-4">
        <DocoButton
          className="bg-sec_light border border-sec_light bg-opacity-20 text-secondary hover:!bg-secondary"
          title="Edit Details"
        />
        <DocoButton
          className="bg-red-600 bg-opacity-20 border border-red-600 hover:!bg-red-600 !text-red-600 hover:!text-white"
          title="Block"
        />
      </div>
    </div>
  )
}
