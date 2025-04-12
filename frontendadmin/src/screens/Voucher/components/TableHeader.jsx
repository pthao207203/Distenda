import * as React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function TableHeader() {
    const navigate = useNavigate(); // Initialize navigate

    // Handle click event for "New Voucher" button
    const handleAddVoucher = () => {
        navigate("/voucher/create"); // Navigate to AddVoucherPage
    };

    return (
        <div className="flex overflow-hidden mt-3 flex-wrap w-full rounded-t-3xl bg-[#6C8299] min-h-[70px] max-md:max-w-full">
            <div className="flex basis-1/8 min-w-0 min-h-[70px] gap-3 justify-center items-center px-3 whitespace-nowrap bg-[#EBF1F9] w-[200px]">
                <div className="gap-2.5 self-stretch my-auto">STT</div>
            </div>
            <div className="flex basis-1/5 min-w-0 min-h-[70px] shrink gap-3 justify-center items-center px-3 text-white max-md:max-w-full">
                <div className="gap-2.5 self-stretch my-auto">Mã voucher</div>
            </div>
            <div className="flex basis-1/6 min-w-0 min-h-[70px] shrink gap-3 justify-center items-center px-3 bg-[#EBF1F9] max-md:max-w-full">
                <div className="gap-2.5 self-stretch my-auto">Giá tối thiểu</div>
            </div>
            <div className="flex basis-1/6 min-w-0 min-h-[70px] shrink gap-3 justify-center items-center px-3 text-white max-md:max-w-full">
                <div className="gap-2.5 self-stretch my-auto">Giảm giá</div>
            </div>
            <div className="flex basis-1/6 min-w-0 min-h-[70px] shrink gap-3 justify-center items-center px-3 bg-[#EBF1F9] max-md:max-w-full">
                <div className="gap-2.5 self-stretch my-auto">Giới hạn</div>
            </div>
            <button
                className="flex basis-1/6 min-w-0 gap-3 justify-center items-center px-3 min-h-[70px] text-white"
                onClick={handleAddVoucher} // Attach onClick event to navigate
            >
                <img
                    loading="lazy"
                    src={process.env.PUBLIC_URL + "./icons/paper_plus.svg"}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                />
                <div className="gap-2.5 self-stretch my-auto">Voucher mới</div>
            </button>
        </div>
    );
}

export default TableHeader;
