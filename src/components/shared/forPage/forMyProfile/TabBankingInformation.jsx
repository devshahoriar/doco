import InputParentDiv from "./InputParentDiv"
import TspInput, { TspSelect } from "./TspInput"

const TabBankingInformation = () => {
  return <div>
    <div className="flex gap-5">
      <InputParentDiv title="Account Holder Name">
        <TspInput placeholder="Enter beneficiary name"/>
      </InputParentDiv>
      <InputParentDiv title="Account Number">
        <TspInput placeholder="Enter Account Number"/>
      </InputParentDiv>
      <InputParentDiv title="Account Type">
        <TspSelect/>
      </InputParentDiv>
    </div>
  </div>
}

export default TabBankingInformation
