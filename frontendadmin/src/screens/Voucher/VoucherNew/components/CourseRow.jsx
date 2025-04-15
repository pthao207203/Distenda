import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseRow = ({ id, index, course }) => {
    const navigate = useNavigate();
    const [isHidden, setIsHidden] = useState(false);

    const { category, name, sold, price, profit, status } = course;

    // const handleEdit = () => {
    //     navigate(`/course/edit/${id}`);
    // };

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    const getStatusStyles = (status) => {
        if (status === "active") {
            return {
                bgColor: "bg-lime-300",
                text: "Hoạt động",
            };
        } else if (status === "paused") {
            return {
                bgColor: "bg-amber-300",
                text: "Tạm dừng",
            };
        }
        return {
            bgColor: "bg-gray-300",
            text: "Không xác định",
        };
    };

    const statusInfo = getStatusStyles(status);

    return (
        <div className="flex overflow-hidden flex-wrap mt-3 w-full bg-white min-h-[70px] max-md:max-w-full">
            {/* Column: Index */}
            <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center bg-[#EBF1F9]">
                <div className="text-[#131313] text-center text-xl font-medium truncate">{index}</div>
            </div>

            {/* Column: Category */}
            <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3 bg-indigo-50">
                <div className="text-[#131313] text-center text-xl font-medium truncate">{category}</div>
            </div>

            {/* Column: Name */}
            <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3">
                <div className="text-[#131313] text-center text-xl font-medium truncate">{name}</div>
            </div>

            {/* Column: Sold */}
            <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3 bg-indigo-50">
                <div className="text-[#131313] text-center text-xl font-medium truncate">{sold}</div>
            </div>

            {/* Column: Price */}
            <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3">
                <div className="text-[#131313] text-center text-xl font-medium truncate">{price}</div>
            </div>

            {/* Column: Profit
            <div className="flex basis-1/6 min-w-0 min-h-[70px] justify-center items-center px-3 bg-indigo-50">
                <div className="text-[#131313] text-center text-xl font-medium truncate">{profit || 'Chưa có lợi nhuận'}</div>
            </div> */}

            {/* Column: Actions */}
            <div className="flex basis-1/6 min-w-0 shrink justify-center items-center px-3 min-h-[70px] max-md:max-w-full">
                {/* Toggle Status Button */}
                <button
                    className={`flex w-full justify-center items-center px-4 py-2 rounded-[99px] ${statusInfo.bgColor}`}
                    onClick={toggleVisibility}
                >
                    <div className="text-[#131313] text-center text-xl font-medium truncate">
                        {statusInfo.text}
                    </div>
                </button>
            </div>
        </div>
    );
};

export default CourseRow;
