import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Area, ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { chartData } from '../../../../utils/const'
import Divider from '../../Divider'
import empty1 from '../forHome/e1.png'
import empty2 from '../forHome/e2.png'
import empty3 from '../forHome/rafiki.png'
import bg_partarn from './bg_partarn.png'
import { BiUpArrow } from 'react-icons/bi'

export const EmptyIma2 = () => {
  return <img src={empty2} alt="" className="object-cover w-[90%]" />
}

export const Dblock = () => {
  return (
    <div className="border border-primary w-full p-2 relative overflow-hidden text-primary rounded-md">
      <h1>Retailars</h1>
      <h1 className="mt-1">-</h1>
      <img
        src={bg_partarn}
        className="object-cover h-16 absolute right-0 bottom-0"
        alt=""
      />
    </div>
  )
}

export const DataBox = ({ title, icon }) => {
  return (
    <div className="w-full h-[23vw] border border-primary rounded-md bg-primary bg-opacity-20">
      <div className="whitespace-nowrap overflow-hidden flex items-center py-3 px-3 font-semibold">
        <span className="bg-white h-5 w-5 md:h-7 md:w-7 flex justify-center items-center rounded-md text-primary md:text-base text-sm lg:text-lg border border-slate-400 mr-2">
          {icon}
        </span>
        <h1 className="overflow-hidden text-ellipsis whitespace-nowrap text-[0.7vw]">
          {title}
        </h1>
        <AiOutlineInfoCircle className="text-primary text-lg ml-1" />
      </div>
      <Divider />
      <div className=" flex justify-center items-center">
        <img src={empty1} alt="" className="object-cover w-[70%] mt-16" />
      </div>
    </div>
  )
}

export const DetaShow = ({ title }) => {
  return (
    <div className="border-r last:border-r-0 border-black pr-6 last:pr-0 h-[75px] xl:text-xs 2xl:text-base">
      <h1 className="font-bold">{title}</h1>
      <h1 className="mt-3"> - </h1>
    </div>
  )
}

export const BigDataBox = ({ title, icon }) => {
  return (
    <div className="w-full border border-primary rounded-md ">
      <div className="p-5">
        <div className="flex items-center pb-5 justify-between">
          <div className="flex items-center">
            <span className="border border-primary rounded-md h-9 w-9 flex items-center justify-center text-primary bg-primary bg-opacity-30 mr-4">
              {icon}
            </span>
            <h1 className="text-primary font-semibold">{title}</h1>
            <AiOutlineInfoCircle className="text-primary text-lg ml-2" />
          </div>
          <div>
            <p className="font-semibold text-primary">View All(100)</p>
          </div>
        </div>
        <hr className="border-primary" />
        <div className="h-[35vw]">
          <img src={empty3} alt="" className="object-cover w-[100%]" />
        </div>
      </div>
    </div>
  )
}

export const SelectYearBtn = ({ year, set, title }) => {
  return (
    <button
      onClick={() => set(title)}
      className={`border-r px-2 last:border-r-0 text-primary font-semibold opacity-50 ${
        year === title && '!opacity-100'
      }`}
    >
      {title}
    </button>
  )
}

export const HomeStaticsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        // layout="vertical"
        data={chartData}
      >
        {/* <CartesianGrid /> */}
        <XAxis dataKey="name" type="category"  />
        <YAxis type="number" />
        <Tooltip />
        {/* <Legend /> */}
        {/* <Line dataKey="pv" stroke="#8884d8" />
      <Line dataKey="uv" stroke="#82ca9d" /> */}
        <Area
          // type="monotone"
          dataKey="pv"
          stroke="#6D3998"
          fillOpacity={0.5}
          fill="#6D3998"
        />
        <Area
          // type="monotone"
          dataKey="amt"
          stroke="#6D3998"
          fillOpacity={0.5}
          fill="#6D3998"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export const ChartDescription = () => {
  return <div className='my-5 border-l-4 border-green-600 pl-3'>
  <p className='opacity-50'>Total Sales</p>
  <h1 className='text-xl font-bold'>$4000</h1>
  <p className='flex items-center text-sm'><span className='text-green-500 flex items-center gap-2'><BiUpArrow/>30%</span> since lasy year</p>
</div>
}
