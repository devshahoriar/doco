import { useEffect, useState } from 'react'
import { MdInventory } from 'react-icons/md'
import { TbBrandAirtable, TbShoppingCartPlus } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import InnerPageLayout from '../components/layout/InnerPageLayout'
import InnerpageRight from '../components/layout/InnerpageRight'
import PageLayout from '../components/layout/PageLayout'
import ItemProductInventoryLoder from '../components/loders/ItemProductInventoryLoder'
import DecoButton from '../components/shared/buttons/DecoButton'
import SelectButton from '../components/shared/buttons/SelectButton'
import Divider from '../components/shared/Divider'
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
import InnerPagetop from '../components/shared/innerPageElement/InnerPagetop'
import InnerSquereSearchBtn from '../components/shared/innerPageElement/InnerSquereSearchBtn'
import SelectTabButton from '../components/shared/innerPageElement/SelectTabButton'
import ItemProductInventory from '../components/shared/ItemProductInventory'
import InventoryAddProductModal from '../components/shared/modal/InventoryAddProductModal'
import ModelMain from '../components/shared/ModelMain'
import PagesHeader from '../components/shared/PagesHeader'
import {
  useInventoryProductDetailsQuery,
  useInventoryProductListQuery,
} from '../redux/api/inventory_page_api'
import {
  closeShowAddBrand,
  closeShowAddProduct,
  openShowAddBrand,
  openShowAddProduct,
  setSelectedProduct,
} from '../redux/slice/invenrotyPageSlice'
import { appName } from '../utils/const'
import updateTitle from '../utils/updateTitle'
import InventoryProductDetailsLoder from '../components/loders/InventoryProductDetailsLoder'
import InventoryTableLoders from '../components/loders/InventoryTableLoders'
import moment from 'moment'

const Invetory = () => {
  const [selectDetails, setSelectDetails] = useState('sales')
  const [selectBtn, setSelectBtn] = useState('All')
  const [sharchShow, setSharchShow] = useState(false)
  const { data, isError, isLoading } = useInventoryProductListQuery()
  const { showAddProduct, showAddBrand, selectedProduct } = useSelector(
    (state) => state.inventoryPage
  )
  const { data: invenPdetails, isFetching: invenIsfetching } =
    useInventoryProductDetailsQuery(selectedProduct.product_id, {
      refetchOnMountOrArgChange: true,
    })

  const dispatch = useDispatch()
  const { total_products = 0, products } = data?.data || {}

  useEffect(() => {
    updateTitle(appName + ' | Invetory')
  }, [])

  useEffect(() => {
    products && dispatch(setSelectedProduct(products[0]))
  }, [products])

  const {
    image,
    name,
    description,
    // unites,
    // mrp,
    // price,
    // out_of_stock,
    // has_offer,
    // inventory,
    // product_id,
  } = selectedProduct

  const { meta_info, brand, sales } = invenPdetails?.data || {}

  return (
    <PageLayout>
      {/* all models */}
      {showAddProduct && (
        <ModelMain
          title="Add Product"
          icon={<TbShoppingCartPlus />}
          set={() => dispatch(closeShowAddProduct())}
          headerBUttonTitle="Add Brande"
          headerButtonOnClick={() => {
            dispatch(openShowAddBrand())
            dispatch(closeShowAddProduct())
          }}
        >
          <InventoryAddProductModal />
        </ModelMain>
      )}
      {showAddBrand && (
        <ModelMain
          title="Add Brand"
          icon={<TbBrandAirtable />}
          set={() => dispatch(closeShowAddBrand())}
          headerBUttonTitle="Add Product"
          headerButtonOnClick={() => {
            dispatch(openShowAddProduct())
            dispatch(closeShowAddBrand())
          }}
        >
          <h1>Add Brand</h1>
        </ModelMain>
      )}
      <PagesHeader
        title="Home"
        subtitle="Inventory"
        button={
          <DecoButton
            title="Add Brand"
            onClick={() => dispatch(openShowAddBrand())}
          />
        }
      />
      <InnerPageLayout>
        <InnerpageRight>
          <InnerPagetop
            icon={<MdInventory />}
            title={`Total Products: ${total_products}`}
            btnTitle="Add Products"
            btnOnClick={() => dispatch(openShowAddProduct())}
          />

          <Divider className="mt-3" />

          <InnerPageControllerBar>
            {sharchShow ? (
              <InnerPageSearchBar
                set={setSharchShow}
                placeHolder="Search Products"
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
                    title="With Offers"
                    selected={selectBtn === 'With Offers'}
                    onClick={() => setSelectBtn('With Offers')}
                  />
                  <SelectButton
                    title="Out of Stock"
                    selected={selectBtn === 'Out of Stock'}
                    onClick={() => setSelectBtn('Out of Stock')}
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
            {isLoading ? (
              <>
                {Array(10)
                  .fill(0)
                  .map((_, i) => (
                    <ItemProductInventoryLoder key={i} />
                  ))}
              </>
            ) : (
              products?.map((item, i) => (
                <ItemProductInventory
                  key={i}
                  data={item}
                  selected={selectedProduct?.product_id === item.product_id}
                />
              ))
            )}
          </InnerPageItemScroller>
        </InnerpageRight>

        <InnerPageLeftScroller>
          <InnerLeftSideProductDetailsBlock>
            {invenIsfetching ? (
              <InventoryProductDetailsLoder />
            ) : (
              <>
                <div className="w-[30%]">
                  <div className="flex items-center">
                    <img
                      src={image}
                      className="h-[70px] w-[70px] object-cover rounded-sm overflow-hidden"
                      alt="product image"
                    />
                    <h1 className="font-bold ml-4">{name}</h1>
                  </div>
                  <p className="overflow-hidden text-ellipsis line-clamp-4 mt-4">
                    {description}
                  </p>
                </div>
                <InnerBlockParent>
                  <InnerPageBlockLeft
                    title="Stock Quantity"
                    desc={meta_info?.stock_quantity}
                  />
                  <InnerPageBlockLeft
                    title="Sales Price"
                    desc={meta_info?.sales_price}
                  />
                  <InnerPageBlockLeft
                    title="Schemes"
                    desc={`${meta_info?.schemes.length} Available`}
                  />
                  <InnerPageBlockLeft
                    title="Stock Value"
                    desc={meta_info?.stock_value}
                  />
                  <InnerPageBlockLeft
                    title="Purchase Price"
                    desc={meta_info?.purchase_price}
                  />
                  <InnerPageBlockLeft title="Brand Name" desc={brand?.name} />
                </InnerBlockParent>
              </>
            )}

            <InnerLeftActionParent>
              <DecoButton
                title="Edit Details"
                className="bg-sec_light text-secondary bg-opacity-30 border border-sec_light"
              />
            </InnerLeftActionParent>
          </InnerLeftSideProductDetailsBlock>

          <div className="mx-6">
            <InnerPageTabs>
              <SelectTabButton
                state={selectDetails}
                title="Sales"
                set={setSelectDetails}
              />
              <SelectTabButton
                state={selectDetails}
                title="Purchases"
                set={setSelectDetails}
              />
            </InnerPageTabs>
          </div>

          <div className="">
            <table className="w-full text-center text-stone-700 text-sm table-auto font-medium border-separate border-spacing-3">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Retail Store Name</th>
                  <th>Qty</th>
                  <th>Unit Price</th>
                  <th>Total Amount</th>
                  <th>Delivery</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {invenIsfetching
                  ? Array(Math.floor(Math.random() * 6) + 3)
                      .fill(0)
                      .map((_, i) => <InventoryTableLoders key={i} />)
                  : sales?.map((item, i) => (
                      <tr key={i}>
                        <td>{moment(item?.date).format('E MMM, YY')}</td>
                        <td>{item?.retailer?.name}</td>
                        <td>{item?.order?.quantiy}</td>
                        <td>₹{item?.order?.unit_price}</td>
                        <td>
                          ₹
                          {(
                            item?.order?.quantiy * item?.order?.unit_price
                          ).toFixed(2)}
                        </td>
                        <td className="text-green-700">
                          {item?.order?.logistic_status}
                        </td>
                        <td className="text-green-700">
                          {item?.order?.payment_status}
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </InnerPageLeftScroller>
      </InnerPageLayout>
    </PageLayout>
  )
}

export default Invetory
