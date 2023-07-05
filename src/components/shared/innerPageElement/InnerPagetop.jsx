import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { MdInventory } from 'react-icons/md'
import DecoButton from '../buttons/DecoButton'
import RoundSqrIconBtn from '../RoundSqrIconBtn'

const InnerPagetop = ({ icon, btnOnClick, btnTitle, title }) => {
  return (
    <div className="flex justify-between items-center mt-3 mx-3">
      <div className='flex'>
        <RoundSqrIconBtn icon={icon} />
        <p className="flex items-center text-primary font-semibold ml-6">
          {title + ' '}
          <AiOutlineExclamationCircle className="ml-2" />
        </p>
      </div>
      <DecoButton title={btnTitle} onClick={btnOnClick} />
    </div>
  )
}

export default InnerPagetop
