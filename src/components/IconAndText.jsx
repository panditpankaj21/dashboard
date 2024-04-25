


function IconAndText({
    active=false,
    isTop=false,
    isBottom=false,
    icon,
    text,
}){
    return(
        <div className={`shadow-md cursor-pointer ${active ? "bg-green-800 text-white" : "text-gray-600 hover:bg-gray-200" } ${isTop ? "rounded-t-lg" : ""} ${isBottom ? "rounded-b-lg" : ""}`}>
            <div className="h-full p-2">
                {icon}
                <p className=" text-sm mt-1 font-bold text-center">{text}</p>
            </div>
        </div>
    )
}
export default IconAndText;