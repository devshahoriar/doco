import { useState } from 'react'
import { BsCashStack, BsShop } from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'
import { FaBlenderPhone } from 'react-icons/fa'
import { GiRoundStruck } from 'react-icons/gi'
import { HiArchiveBox } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import PageLayout from '../components/layout/PageLayout'
import ApplyFilterBtn, {
  FilterBody,
  FilterClearBtn,
  FilterRedio,
} from '../components/shared/ApplyFilterBtn'
import PagesHeader from '../components/shared/PagesHeader'
import SelectButton from '../components/shared/buttons/SelectButton'
import {
  BigDataBox,
  ChartDescription,
  DataBox,
  Dblock,
  DetaShow,
  HomeStaticsChart,
  SelectYearBtn,
} from '../components/shared/forPage/forHome/HomeElements'
import {
  setFilterOptionSelMer,
  setFilterOptionSelMerClear,
} from '../redux/slice/homePageSlice'
import { useEffect } from 'react'
import updateTitle from '../utils/updateTitle'

const Home = () => {
  const [staCharts, setStaCharts] = useState('Sales & Margin')
  const [selectYear, setSelectYear] = useState('2011')
  const dispatch = useDispatch()

  useEffect(() => {
    updateTitle('My Doco | Home')
  }, [])

  return (
    <PageLayout>
      <PagesHeader title="Home" />
      <div className="flex mt-5 gap-7 items-stretch h-[750px]">
        <div className="w-[60%] border border-primary rounded-lg">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="text-primary font-semibold">Select Brand</p>
                <select
                  name="brand"
                  id="brand"
                  className="px-5 ml-4 bg-transparent border border-primary py-2 pr-60 text-primary"
                >
                  <option value="1">All Brand</option>
                  <option value="2">Brand 2</option>
                  <option value="3">Brand 3</option>
                </select>
              </div>
              <div className="flex gap-4 items-center">
                <select
                  name="brand"
                  id="brand"
                  className="bg-transparent border border-primary py-1 px-2 text-primary rounded-3xl"
                >
                  <option value="1">Year</option>
                  <option value="2">2022</option>
                  <option value="3">2023</option>
                </select>
                <select
                  name="brand"
                  id="brand"
                  className="bg-transparent border py-1 px-2 border-primary text-primary rounded-3xl"
                >
                  <option value="1">Month</option>
                  <option value="2">Jan</option>
                  <option value="3">Feb</option>
                </select>
              </div>
            </div>

            <div className="flex w-full justify-between mt-6 gap-4">
              <Dblock />
              <Dblock />
              <Dblock />
              <Dblock />
            </div>

            <div className="flex justify-between gap-4 mt-6 w-full">
              <DataBox title="Revenue by Retailers" icon={<BsShop />} />
              <DataBox
                title="Revenue/Margin by SKU’s"
                icon={<FaBlenderPhone />}
              />
              <DataBox
                title="Revenue/Margin by Brands"
                icon={<GiRoundStruck />}
              />
            </div>

            <div className="mt-6 flex w-ful gap-7">
              <DetaShow title="Lowest Rotation SKU" />
              <DetaShow title="Max Schema SKU" />
              <DetaShow title="Highest Credit Score" />
              <DetaShow title="Max Credit Days" />
              <DetaShow title="Retailers (Max Dip)" />
            </div>
          </div>
        </div>

        <div className="w-[40%] flex flex-col h-full">
          <div className="flex flex-col items-stretch justify-between h-full">
            <h1 className="font-bold text-2xl text-primary">
              Statistics / Charts
            </h1>
            <div className="flex gap-x-5 gap-y-3 flex-wrap mt-3">
              <SelectButton
                title="Sales & Margin"
                selected={staCharts === 'Sales & Margin'}
                onClick={() => setStaCharts('Sales & Margin')}
              />
              <SelectButton
                selected={staCharts === 'Sales & Margin by SKU'}
                title="Sales & Margin by SKU"
                onClick={() => setStaCharts('Sales & Margin by SKU')}
              />
              <SelectButton
                selected={staCharts === 'Sales & Margin by Brands'}
                title="Sales & Margin by Brands"
                onClick={() => setStaCharts('Sales & Margin by Brands')}
              />
              <SelectButton
                selected={staCharts === 'Sales vs Cash Collection'}
                title="Sales vs Cash Collection"
                onClick={() => setStaCharts('Sales vs Cash Collection')}
              />
              <SelectButton
                title="Orders"
                selected={staCharts === 'Orders'}
                onClick={() => setStaCharts('Orders')}
              />
              <SelectButton
                title="Credit Cycle"
                selected={staCharts === 'Credit Cycle'}
                onClick={() => setStaCharts('Credit Cycle')}
              />
            </div>
            <div className="border border-primary mt-6 rounded-md h-full">
              <div className="p-3 h-full">
                <div className="flex items-center gap-3 justify-between">
                  <div className="flex items-center min-w-fit gap-3">
                    <h1 className="font-semibold text-primary text-xl">
                      {staCharts}
                    </h1>
                    <ApplyFilterBtn>
                      <FilterBody>
                        <FilterClearBtn
                          setCler={() => dispatch(setFilterOptionSelMerClear())}
                        />
                        <FilterRedio
                          title="Pending"
                          onUpdate={(e) =>
                            dispatch(setFilterOptionSelMer(e.target.value))
                          }
                        />
                        <FilterRedio
                          title="Confirmed"
                          onUpdate={(e) =>
                            dispatch(setFilterOptionSelMer(e.target.value))
                          }
                        />
                        <FilterRedio
                          title="Delivered"
                          onUpdate={(e) =>
                            dispatch(setFilterOptionSelMer(e.target.value))
                          }
                        />
                      </FilterBody>
                    </ApplyFilterBtn>
                  </div>

                  <div className="overflow-x-auto flex flex-nowrap scrollbar-thin">
                    <SelectYearBtn
                      title="2011"
                      year={selectYear}
                      set={setSelectYear}
                    />
                    <SelectYearBtn
                      title="2012"
                      year={selectYear}
                      set={setSelectYear}
                    />
                    <SelectYearBtn
                      title="2013"
                      year={selectYear}
                      set={setSelectYear}
                    />
                  </div>
                </div>
                <ChartDescription />
                <div className="">
                  <HomeStaticsChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-between gap-8 mb-10">
        <BigDataBox title="Inventory" icon={<HiArchiveBox />} />
        <BigDataBox title="Orders" icon={<CgNotes />} />
        <BigDataBox title="Cash Collection" icon={<BsCashStack />} />
      </div>
    </PageLayout>
  )
}

export default Home
