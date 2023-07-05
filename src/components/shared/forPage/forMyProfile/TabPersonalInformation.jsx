import { useState } from 'react'
import ButtonInputImage from './ButtonInputImage'
import SelectImageView from './SelectImageView'
import InputParentDiv from './InputParentDiv'
import TspInput, { TspSelect } from './TspInput'
import GovtCardPreview from './GovtCardPreview'
import AddressBoxInput from '../../innerPageElement/AddressBoxInput'
import AddInfoButton from '../../innerPageElement/AddInfoButton'

const TabPersonalInformation = () => {
  const [profileImg, setProfileImg] = useState(null)
  const [nidFont, setNidFont] = useState(null)
  const [nidBack, setNidBack] = useState(null)

  return (
    <div className="w-ful">
      <div className="flex">
        <div>
          <div className="h-32 w-32 overflow-hidden relative">
            <SelectImageView selectImage={profileImg} />
            <div className="absolute z-40 bottom-3 right-0">
              <ButtonInputImage onChange={setProfileImg} />
            </div>
          </div>
        </div>
        <div className="ml-10">
          <div className="flex gap-10">
            <InputParentDiv title="Full Name">
              <TspInput placeholder="Enter name" />
            </InputParentDiv>
            <InputParentDiv title="E-mail ID">
              <TspInput placeholder="Enter email" />
            </InputParentDiv>
            <InputParentDiv title="Contact Number">
              <TspInput placeholder="Enter mobile number" />
            </InputParentDiv>
          </div>
          <div className="flex gap-10 mt-10">
           <AddressBoxInput/>
            <InputParentDiv title="Gender">
              <TspSelect />
            </InputParentDiv>
          </div>
          <div className="mt-10">
            <InputParentDiv title="Govt. ID Card" w="w-fit">
              <div className="flex gap-5">
                <GovtCardPreview
                  title="Upload front side"
                  selectImage={nidFont}
                  onChange={setNidFont}
                />
                <GovtCardPreview
                  title="Upload back side"
                  selectImage={nidBack}
                  onChange={setNidBack}
                />
              </div>
            </InputParentDiv>
          </div>
          <AddInfoButton/>
        </div>
      </div>
    </div>
  )
}

export default TabPersonalInformation
