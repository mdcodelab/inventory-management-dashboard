import { LucideIcon } from "lucide-react";
import React from "react";

type StatDetails = {
title: string;
amount: string;
changePercentage: number;
IconComponent: LucideIcon;
}


type StatCardProps = {
title: string,
primaryIcon: JSX.Element;
details: StatDetails[];
dataRange: string;
}

const StatCard = ({title, primaryIcon, details, dataRange}: StatCardProps) => {
    
    const formatPercentage = (value: number) => {
        const signal = value >= 0 ? "+" : "";
        return `${signal}${value.toFixed()}%`;
}

const getColors = (value:number) => {
return value >=0 ? "text-green-500" : "text-red-500";
}

return (
    <div className="md:row-span-1 xl:row-span-2 bg-white col-span-1 shadow:md rounded-2xl 
    flex flex-col justify-between">
        {/* HEADER */}
            <div>
                <div className="flex items-center justify-between mb-2 px-5 pt-4">
                <h2 className="font-semibold text-lg text-gray-700">{title}</h2>
                <span className="text-xs text-gray-400">{dataRange}</span>
                </div>
                <hr></hr>
            </div>
        
        {/* BODY */}
        <div className="flex flex-col items-center mb-6 justify-around gap-4 px-5 pt-10">
            <div className="rounded-full p-5 bg-blue-50 border-sky-500 border-[1px] mt-2">{primaryIcon}</div>
            <div className="flex-1">
                {details.map((detail, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="flex items-center justify-between my-4 w-[220px]">
                                <span className="text-gray-500">{detail.title}</span>
                                <span className="text-bold text-gray-800">{detail.amount}</span>
                                <div className="flex items-center">
                                <detail.IconComponent className={`w-4 h-4 mr-1 ${getColors(detail.changePercentage
                    )}`}/>
                    <span className={`font-medium ${getColors(detail.changePercentage)}`}>
                    {formatPercentage(detail.changePercentage)}
                  </span>
                                </div>
                            </div>
                            {index < details.length - 1 && <hr />}
                        </React.Fragment>
                    )
                })}
            </div>
        </div>


    
    </div>
)
}



export default StatCard;