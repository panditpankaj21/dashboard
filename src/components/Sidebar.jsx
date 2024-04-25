import IconAndText from "./IconAndText";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoEyedropOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BiFileBlank } from "react-icons/bi";

function Sidebar(){

    const dashboards = [
        <IconAndText 
            icon= {<FaRegCircleUser className="text-xl w-full"/>}
            text="Patients"
            isTop={true}
        />,
        <IconAndText 
            icon= {<FaDatabase className="text-xl w-full"/>}
            text="HR"
            active={true} 
        />,
        <IconAndText 
            icon= {<CiFilter className="text-xl w-full"/>}
            text="Labs" 
        />,
        <IconAndText 
            icon= {<BsHouseDoor className="text-xl w-full"/>}
            text="Pharma" 
            isBottom={true}
        />
    ]

    const processes = [
        <IconAndText 
            icon= {<IoNewspaperOutline className="text-xl w-full"/>}
            text="Registration" 
            isTop={true}
        />,
        <IconAndText 
            icon= {<BiFileBlank className="text-xl w-full"/>}
            text="Consultation" 
        />,
        <IconAndText 
            icon= {<IoEyedropOutline className="text-xl w-full"/>}
            text="Tests & Reports" 
        />,
        <IconAndText 
            icon= {<FaRegMoneyBillAlt className="text-xl w-full"/>}
            text="Billing" 
            isBottom={true}
        />
    ]

    return(
        <div className="w-[10%] mx-3">
            <p className="font-bold text-gray-400">Dashboards</p>
            {dashboards}
            <p className="font-bold text-gray-400">Processes</p>
            {processes}
        </div>
    )
}
export default Sidebar;