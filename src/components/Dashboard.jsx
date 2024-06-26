import { HiOutlineUserGroup } from "react-icons/hi";
import TotalCard from './TotalCard.jsx';
import { VscGraph } from "react-icons/vsc";
import { FaMoneyBill } from "react-icons/fa6";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { TfiBackRight } from "react-icons/tfi";
import { IoArrowDownSharp } from "react-icons/io5";
import Table from "./Table.jsx";


function Dashboard(){

    const cards = [
        <TotalCard
            title="Consultant Count"
            count="90/900"
            BorderColor="border-orange-200"
            BgColor="bg-orange-200"
            icon={<HiOutlineUserGroup className='text-2xl'/>}
        />,
        <TotalCard
            title='Constuntations'
            count='11/25'
            BorderColor="border-blue-300"
            BgColor="bg-blue-300"
            icon={<VscGraph className='text-2xl'/>}
        />,
        <TotalCard
            title="Labs"
            count="25/560"
            BorderColor="border-green-300"
            BgColor="bg-green-300"
            icon={<FaMoneyBill className='text-2xl'/>}
        />,
        <TotalCard
            title="Labs"
            count="25/560"
            BorderColor="border-purple-300"
            BgColor="bg-purple-300"
            icon={<LiaMoneyCheckAltSolid className='text-2xl'/>}
        />
    ]

    return(
        <div className='w-full bg-gray-200 px-2'>
          <div className='bg-white  text-green-700 text-md px-3 mt-2 rounded-md '>
            <div className='flex items-center gap-1 border-green-700 border-b-[2px] cursor-pointer w-fit py-2'>
              <HiOutlineUserGroup/>
              <p className=''>Consultants</p>
            </div>
          </div>
          <div className='bg-white rounded-l-md mt-2'>
            <div className='flex rounded-l-md overflow-hidden'>
              <div className='bg-green-800 py-3 px-4 text-white'>Filter</div>
              <div className='w-0 h-0 border-t-[10px] border-t-transparent border-l-[13px]  border-l-green-800 border-b-[10px] border-b-transparent self-center'></div>
              <select className='ml-3 rounded-full border-[1px] border-gray-300 my-1 px-1'>
                <option value="Select Range">Select Range</option>
              </select>
              <div className='ml-3 self-center'>
                <input type="radio" className=''/>
                <label className='ml-1'>Summary</label>
              </div>
              <div className='ml-3 self-center'>
                <input type="radio" />
                <label className='ml-1'>Branch Wise</label>
              </div>

            </div>
          </div>
          <div className='mt-2 w-full flex gap-5'>
            {cards}
          </div>

          <div className=' mt-4 p-4 bg-white rounded-md'>
            <div className='flex items-center justify-between px-2'>
              <p className='font-bold text-gray-500'>Consultants</p>
              <div className='flex gap-3'>
                <div className='rounded-full border-gray-500 border-[1px] p-1'>
                  <TfiBackRight className='text-xl'/>
                </div>
                <div className='rounded-full border-gray-500 border-[1px] p-1'>
                  <IoArrowDownSharp className='text-xl'/>
                </div>
              </div>
            </div>
            <Table/>
          </div>
        </div>
    )
}

export default Dashboard;