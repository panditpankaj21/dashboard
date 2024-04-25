import { IoNotificationsOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

function Navbar(){
    return(
        <div className="bg-sky-950 flex justify-between px-2 py-3 items-center h-[10%]">
            <div className="cursor-pointer w-9 h-9 rounded-full bg-sky-900">
                
            </div>
            <div className="flex">
                <select className="border-none p-2 rounded-l-full bg-gray-200">
                    <option value="Patient">Patient</option>
                </select>
                <div className="relative">
                    <input 
                        type="text" 
                        className="p-2 rounded-r-full w-80" 
                        placeholder="Search" 
                    />
                    <IoSearch className="absolute text-2xl text-gray-400 top-2 right-3 cursor-pointer"/>
                </div>
                <div className="bg-green-700 text-center rounded-full items-center flex px-4 ml-2 text-sm text-white">
                    + Add New
                </div>
            </div>
        
            <div className="flex gap-4">
                <div className="relative cursor-pointer">
                    <div className="bg-gray-700 rounded-full p-1">
                        <IoNotificationsOutline  className="text-2xl text-gray-300  "/>
                    </div>
                    <span className="bg-red-400 h-[10px] w-[10px] rounded-full absolute -top-[3px] right-[3px] border-sky-950 border-[1px] "></span>
                </div>
                <div className="cursor-pointer">
                    <img 
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt=""
                        className="w-8 h-8 rounded-full border-gray-400 border-2" 
                    />
                </div>
            </div>
        </div>
    )
}
export default Navbar;