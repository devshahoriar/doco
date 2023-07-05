import { useEffect, useState } from 'react'
import { BsShop, BsTelephoneFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import InnerPageLayout from '../components/layout/InnerPageLayout'
import InnerpageRight from '../components/layout/InnerpageRight'
import PageLayout from '../components/layout/PageLayout'
import InnarLeftSideProductDetailsLoder from '../components/loders/InnarLeftSideProductDetailsLoder'
import ItemDetailsRetailarLoder from '../components/loders/ItemDetailsRetailarLoder'
import ItemRetailerStoreLoder from '../components/loders/ItemRetailerStoreLoder'
import Divider from '../components/shared/Divider'
import PagesHeader from '../components/shared/PagesHeader'
import DecoButton from '../components/shared/buttons/DecoButton'
import SelectButton from '../components/shared/buttons/SelectButton'
import ItemDetailsRetailars from '../components/shared/forPage/retailarsPage/ItemDetailsRetailars'
import ItemRetailarsStore from '../components/shared/forPage/retailarsPage/ItemRetailarsStore'
import InnerBlockParent from '../components/shared/innerPageElement/InnerBlockParent'
import InnerLeftActionParent from '../components/shared/innerPageElement/InnerLeftActionParent'
import InnerLeftSideProductDetailsBlock from '../components/shared/innerPageElement/InnerLeftSideProductDetailsBlock'
import InnerPageBlockLeft from '../components/shared/innerPageElement/InnerPageBlockLeft'
import InnerPageButtonGroup from '../components/shared/innerPageElement/InnerPageButtonGroup'
import InnerPageControllerBar from '../components/shared/innerPageElement/InnerPageControllerBar'
import InnerPageItemScroller from '../components/shared/innerPageElement/InnerPageItemScroller'
import InnerPageLeftScroller from '../components/shared/innerPageElement/InnerPageLeftScroller'
import InnerPageSearchBar from '../components/shared/innerPageElement/InnerPageSearchBar'
import InnerPageTabs from '../components/shared/innerPageElement/InnerPageTabs'
import InnerSquereSearchBtn from '../components/shared/innerPageElement/InnerSquereSearchBtn'
import SelectTabButton from '../components/shared/innerPageElement/SelectTabButton'
import InnerPagetop from '../components/shared/innerPageElement/InnerPagetop'
import {
  useGetAllRetailersQuery,
  useGetOrderlistQuery,
  useGetTransactionlistQuery,
} from '../redux/api/retailerPageApi'
import { setSelectedRetailar } from '../redux/slice/retailarPageSlice'
import updateTitle from '../utils/updateTitle'
import ItemTransactionRetailar from '../components/shared/forPage/retailarsPage/ItemTransactionRetailar'
import { BiFilter } from 'react-icons/bi'
import RetailarFilter from '../components/shared/forPage/retailarsPage/RetailarFilter'
import ModelMain from '../components/shared/ModelMain'
import {
  AddRetailars,
  RetailarPageSearchModel,
} from '../components/shared/modal/RetailarsPageModel'

const Retailers = () => {
  const dispatch = useDispatch()
  const [selectBtn, setSelectBtn] = useState('All')
  const [sharchShow, setSharchShow] = useState(false)
  const [filterShow, setFilterShow] = useState(false)
  const [addRetailars, setAddRetailars] = useState(false)
  const [addRetailars2, setAddRetailars2] = useState(false)
  const [selectDetails, setSelectDetails] = useState('orders')
  const { data, isError, isLoading } = useGetAllRetailersQuery()
  const selectedRetailars = useSelector(
    (state) => state.retailarPage.selectedRetailar
  )

  const {
    data: orderList,
    isLoading: orderListLoading,
    isFetching,
  } = useGetOrderlistQuery(selectedRetailars, {
    skip: selectedRetailars?.id || selectDetails !== 'orders',
    refetchOnMountOrArgChange: true,
  })
  const { data: transData, isFetching: transFectching } =
    useGetTransactionlistQuery(selectedRetailars, {
      skip: selectedRetailars?.id || selectDetails !== 'transactions',
      refetchOnMountOrArgChange: true,
    })

  const arrRetailars = data?.data
  const retailarList = orderList?.data
  const retailarTrans = transData?.data

  useEffect(() => {
    updateTitle('My Doco | Retailars')
  }, [])

  useEffect(() => {
    if (arrRetailars) {
      dispatch(setSelectedRetailar(arrRetailars[0]))
    }
  }, [arrRetailars])

  return (
    <PageLayout>
      {addRetailars2 && (
        <ModelMain
          title="Add Retailer"
          icon={<BsShop />}
          set={() => setAddRetailars2((r) => !r)}
          width="w-[1000px]"
        >
          <AddRetailars />
        </ModelMain>
      )}
      {addRetailars && (
        <ModelMain
          title="Add Retailer"
          icon={<BsShop />}
          set={() => setAddRetailars((r) => !r)}
          width="w-[500px]"
        >
          <RetailarPageSearchModel
            set={() => {
              setAddRetailars((r) => !r)
              setAddRetailars2((r) => !r)
            }}
          />
        </ModelMain>
      )}
      <PagesHeader title="Home" subtitle="Retailars" />
      <InnerPageLayout>
        <InnerpageRight>
          <InnerPagetop
            icon={<BsShop />}
            title="Total Retailars: 51"
            btnTitle="Add Retailars"
            btnOnClick={() => setAddRetailars(true)}
          />
          <Divider className="mt-3" />
          <InnerPageControllerBar>
            {sharchShow ? (
              <InnerPageSearchBar
                set={setSharchShow}
                placeHolder="Search Retailars"
              />
            ) : (
              <>
                <InnerPageButtonGroup>
                  <SelectButton
                    title="All"
                    selected={selectBtn === 'All'}
                    onClick={() => setSelectBtn('All')}
                  />
                  <SelectButton
                    title="Recently Ordered"
                    selected={selectBtn === 'Recently Ordered'}
                    onClick={() => setSelectBtn('Recently Ordered')}
                  />
                  <SelectButton
                    title="Active"
                    selected={selectBtn === 'Active'}
                    onClick={() => setSelectBtn('Active')}
                  />
                  <SelectButton
                    title="Blocked"
                    selected={selectBtn === 'Blocked'}
                    onClick={() => setSelectBtn('Blocked')}
                  />
                </InnerPageButtonGroup>
                <InnerSquereSearchBtn
                  btnOnClick={() => setSharchShow((p) => !p)}
                />
              </>
            )}
          </InnerPageControllerBar>
          <InnerPageItemScroller>
            {isError && <h1>Something went wrong</h1>}
            {isLoading &&
              Array(5)
                .fill(0)
                .map((_, i) => <ItemRetailerStoreLoder key={i} />)}
            {arrRetailars?.map((item, i) => (
              <ItemRetailarsStore
                select={selectedRetailars?.retailer_id === item?.retailer_id}
                key={i}
                item={item}
              />
            ))}
          </InnerPageItemScroller>
        </InnerpageRight>
        <InnerPageLeftScroller>
          <InnerLeftSideProductDetailsBlock>
            {isLoading ? (
              <InnarLeftSideProductDetailsLoder />
            ) : (
              <>
                <div className="w-[30%]">
                  <div className="flex items-center">
                    <img
                      src="https://source.unsplash.com/random/?product"
                      className="h-14 rounded-full w-14 object-cover "
                      alt="product image"
                    />
                    <h1 className="font-bold ml-4 text-secondary max-w-36 line-clamp-1">
                      {selectedRetailars?.name}
                    </h1>
                  </div>
                  <div className="mt-6">
                    <p>
                      <span className="font-semibold">GSTIN:</span>
                      {' ' + selectedRetailars?.gst_number}
                    </p>
                    <div className="flex gap-3 items-center mt-4">
                      <BsTelephoneFill className="bg-sec_light h-7 rounded-md bg-opacity-50 w-7 p-1 text-secondary" />
                      <p>{selectedRetailars?.mobile}</p>
                    </div>
                  </div>
                </div>
                <InnerBlockParent>
                  <InnerPageBlockLeft title="SKU's" desc="800" />
                  <InnerPageBlockLeft title="Sales" desc="$40.23" />
                  <InnerPageBlockLeft title="Orders" desc="05" />
                  <InnerPageBlockLeft title="Pending Payment" desc="$32,183" />
                  <InnerPageBlockLeft title="Credit Cycle" desc="30 days" />
                  <InnerPageBlockLeft title="Credit Score" desc="90" />
                </InnerBlockParent>
                <InnerLeftActionParent>
                  <DecoButton
                    title="Record Transaction"
                    className="bg-green-400 !text-green-700 bg-opacity-30 border border-green-600  hover:!bg-green-700 hover:!text-white"
                  />
                  <DecoButton
                    title="Block Retailer"
                    className="bg-red-400 mt-4  text-red-700 bg-opacity-30 border border-red-600 hover:bg-red-600"
                  />
                </InnerLeftActionParent>
              </>
            )}
          </InnerLeftSideProductDetailsBlock>
          <div className="mx-6">
            <InnerPageTabs
              action={
                <div
                  onClick={() => setFilterShow((p) => !p)}
                  className="flex items-center gap-3 bg-sec_light px-2 py-1 rounded-2xl bg-opacity-30 text-secondary border border-transparent hover:border-secondary cursor-pointer select-none"
                >
                  <BiFilter className="text-xl" />
                  <h1>Apply Filter</h1>
                </div>
              }
            >
              {filterShow && <RetailarFilter />}
              <SelectTabButton
                state={selectDetails}
                title="Orders"
                count={retailarList?.length || 0}
                set={setSelectDetails}
              />
              <SelectTabButton
                state={selectDetails}
                title="Transactions"
                count="01"
                set={setSelectDetails}
              />
              <SelectTabButton
                state={selectDetails}
                title="KYC"
                set={setSelectDetails}
              />
            </InnerPageTabs>
          </div>
          <div className="m-6">
            {selectDetails === 'orders' && (
              <>
                {isError && <h1>Something went wrong</h1>}
                {orderListLoading && <ItemDetailsRetailarLoder />}

                {isFetching ? (
                  <ItemDetailsRetailarLoder />
                ) : (
                  retailarList?.map((item, i) => (
                    <ItemDetailsRetailars item={item} key={i} />
                  ))
                )}
              </>
            )}
            {selectDetails === 'transactions' && (
              <>
                {transFectching ? (
                  <ItemDetailsRetailarLoder />
                ) : (
                  <>
                    {retailarTrans.map((item, i) => (
                      <ItemTransactionRetailar item={item} key={i} />
                    ))}
                  </>
                )}
              </>
            )}
            {selectDetails === 'kyc' && (
              <div className="bg-sec_light bg-opacity-10 p-3 ">
                <div className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      className="h-12 w-12  rounded-full object-cover border border-secondary"
                      src="https://source.unsplash.com/random/?logo"
                      alt=""
                    />
                    <h1 className="font-bold ml-2 text-xl">Store name</h1>
                    <p className="bg-green-800 text-white px-2 py-1">
                      Verified
                    </p>
                  </div>
                  <DecoButton
                    className="bg-sec_light bg-opacity-50 border border-secondary self-center text-secondary"
                    title="Edit Details"
                  />
                </div>
                <div className="mt-4">
                  <table className="table-fixed border-spacing-3">
                    <tbody>
                      <tr>
                        <td className="font-semibold w-32">GSTIN</td>
                        <td>SHJJHB83465JSDFNSD4</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Address</td>
                        <td>Bagha, Rajshahi, Bangladesh 6280</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Contact No.</td>
                        <td>+91 232403-234234</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">PAN</td>
                        <td>AOJPC7889P</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Aadhar</td>
                        <td>5645 9387 8376</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </InnerPageLeftScroller>
      </InnerPageLayout>
    </PageLayout>
  )
}

export default Retailers
