import {
  AiOutlineCloseSquare,
  AiOutlineExclamationCircle,
} from 'react-icons/ai'
import DecoButton from './buttons/DecoButton'
import RoundSqrIconBtn from './RoundSqrIconBtn'

const ModelMain = ({
  icon,
  title,
  set,
  children,
  headerButtonOnClick,
  headerBUttonTitle,
  width = 'w-[820px]',
}) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 h-screen w-screen bg-black bg-opacity-40 backdrop-blur-sm z-50 flex justify-center items-center">
      <div
        className={`min-h-[510px]  bg-white rounded-lg overflow-hidden shadow-gray-500 shadow-2xl ${width}`}
      >
        {/* modal header */}
        <div className="flex justify-between p-4 border-b border-primary">
          <div className="flex items-center text-primary">
            <RoundSqrIconBtn icon={icon} />
            <h1 className="font-semibold  ml-5">{title}</h1>
            <AiOutlineExclamationCircle className="ml-5 text-lg" />
          </div>
          <div className="flex items-center">
            {headerBUttonTitle && (
              <DecoButton
                onClick={headerButtonOnClick}
                title={headerBUttonTitle}
                className="border border-primary"
              />
            )}
            <button onClick={() => set()} className="hover:text-primary">
              <AiOutlineCloseSquare className="ml-6 text-3xl" />
            </button>
          </div>
        </div>
        {/* modal body */}
        <div className="h-full w-full p-4 relative">{children}</div>
      </div>
    </div>
  )
}

export default ModelMain
