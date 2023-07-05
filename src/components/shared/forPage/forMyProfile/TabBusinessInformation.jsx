import { useState } from 'react'
import ButtonInputImage from './ButtonInputImage'
import SelectImageView from './SelectImageView'
import InputParentDiv from './InputParentDiv'
import TspInput from './TspInput'
import AddressBoxInput from '../../innerPageElement/AddressBoxInput'
import AddInfoButton from '../../innerPageElement/AddInfoButton'

const TabBusinessInformation = () => {
  const [busnessImg, setBusnessImg] = useState(null)
  return (
    <div className="w-ful">
      <div className="flex">
        <div>
          <div className="h-32 w-32 overflow-hidden relative">
            <SelectImageView
              selectImage={busnessImg}
              round="rounded-md"
              bgImg="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
            />
            <div className="absolute z-40 bottom-0 right-0 ">
              <ButtonInputImage onChange={setBusnessImg} />
            </div>
          </div>
        </div>
        <div className="ml-10">
          <div className="flex gap-10">
            <InputParentDiv title="Company Name">
              <TspInput placeholder="Enter name" />
            </InputParentDiv>
            <InputParentDiv title="Contact Person">
              <TspInput placeholder="For official communication" />
            </InputParentDiv>
            <InputParentDiv title="Contact Number">
              <TspInput placeholder="For official communication" />
            </InputParentDiv>
          </div>
          <div className="flex gap-10 mt-10">
            <AddressBoxInput title="Company Address" />
            <InputParentDiv title="Email Id">
              <TspInput placeholder="For official communication" />
            </InputParentDiv>
          </div>
          <AddInfoButton/>
        </div>
      </div>
    </div>
  )
}

export default TabBusinessInformation
