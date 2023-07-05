import InputParentDiv from '../forPage/forMyProfile/InputParentDiv'
import TspInput from '../forPage/forMyProfile/TspInput'

const AddressBoxInput = ({ title = 'Address', w='w-[350px]' }) => {
  return (
    <InputParentDiv title={title} w={w}>
      <TspInput placeholder="House No / Building Name" />
      <TspInput placeholder="Street Name / Area" />
      <div className="flex w-full gap-2">
        <TspInput w="w-[50%]" placeholder="City" />
        <TspInput w="w-[50%]" placeholder="Pin Code" />
      </div>
      <TspInput placeholder="State" />
    </InputParentDiv>
  )
}

export default AddressBoxInput
