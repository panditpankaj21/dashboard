
function TotalCard({
    title,
    count,
    BorderColor,
    BgColor,
    icon
}){
    return(
        <div className={`flex items-start border-l-4 ${BorderColor} w-fit gap-10 py-2 px-5 bg-white rounded-sm`}>
            <div>
                <p className="font-bold text-green-700">{title}</p>
                <p className="font-bold text-gray-600 text-2xl">{count}</p>
                <p className="text-gray-500 text-xs">Today/Period</p>
            </div>
            <div>
                <div className={`rounded-full ${BgColor} p-2`}>
                    {icon}
                </div>
            </div>
        </div>
    )
}
export default TotalCard;