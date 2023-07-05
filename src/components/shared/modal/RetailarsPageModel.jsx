import DecoButton from '../buttons/DecoButton'
import InputParentDiv from '../forPage/forMyProfile/InputParentDiv'
import TspInput from '../forPage/forMyProfile/TspInput'
import AddInfoButton from '../innerPageElement/AddInfoButton'
import AddressBoxInput from '../innerPageElement/AddressBoxInput'
import RoundImageSelect from '../innerPageElement/RoundImageSelect'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export const AddRetailars = ({close}) => {
  return (
    <div className="flex gap-4">
      <RoundImageSelect />
      <div className="flex flex-col gap-5">
        <div className="flex gap-3">
          <InputParentDiv title="Contact Person Name" w="w-[250px]">
            <TspInput placeholder="Full Name" />
          </InputParentDiv>
          <InputParentDiv title="Contact Number" w="w-[200px]">
            <TspInput placeholder="Mobile No." />
          </InputParentDiv>
          <InputParentDiv title="Credit Amount" w="w-[200px]">
            <TspInput placeholder="₹" />
          </InputParentDiv>
          <InputParentDiv title="Credit Cycle" w="w-[200px]">
            <TspInput placeholder="i.e. 15 Days" />
          </InputParentDiv>
        </div>
        <AddressBoxInput w="w-[450px]" />
        <InputParentDiv title="Contact Person Name" w="w-[450px]">
          <TspInput placeholder="Full Name" />
        </InputParentDiv>
        <InputParentDiv title="Contact Person Name" w="w-[450px]">
          <TspInput placeholder="Full Name" />
        </InputParentDiv>
        <div className="flex justify-end">
          <AddInfoButton className="mt-0" />
        </div>
      </div>
    </div>
  )
}

export const RetailarPageSearchModel = ({set}) => {
  const items = [
    {
      id: 0,
      name: 'Cobol',
    },
    {
      id: 1,
      name: 'JavaScript',
    },
    {
      id: 2,
      name: 'Basic',
    },
    {
      id: 3,
      name: 'PHP',
    },
    {
      id: 4,
      name: 'Java',
    },
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <div className="flex border border-sec_light bg-sec_light bg-opacity-20 mr-2 px-2 py-4 rounded-md">
        <div>
          <img
            src="https://picsum.photos/200"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div className="ml-3">
          <h1 className="font-bold">Retailar name</h1>
          <div className="flex mt-4">
            <p>Address </p>
          
              <p className="text-ellipsis ml-8">
                #12, Rajnagar Extension,<br/> Ghaziabad, U.P. - 250001
              </p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="w-full">
      <div>
        <h1 className="">Search Retailer</h1>
        <p className="text-primary">Search Retailer By Mobile Number</p>
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          autoFocus
          formatResult={formatResult}
          className="mt-2 retSearchBox"
          maxResults={2}
          showIcon={false}
        />
      </div>
      <DecoButton onClick={set} className="w-full mt-[60%]" title="Add Retailar" />
    </div>
  )
}
