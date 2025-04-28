import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import SearchBar from "./../../layouts/private/SearchBar";
import TableHeader from "./components/TableHeader";
import VoucherRow from "./components/VoucherRow";
import { vouchersController } from "../../controllers/voucher.controller.js";
import Loading from "../../components/Loading";

function VoucherList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);  // Thêm state để lưu lỗi
    const location = useLocation();
    const newVoucher = location.state?.newVoucher;  // Nhận voucher mới từ state

    useEffect(() => {
        async function fetchData() {
            setLoading(true);  // Bắt đầu quá trình tải dữ liệu
            try {
                const result = await vouchersController(setLoading);
                console.log("API response:", result);  // Kiểm tra dữ liệu trả về từ API
                if (result) {
                    setData(result);  // Cập nhật danh sách ban đầu nếu API trả về dữ liệu
                }
            } catch (error) {
                console.error("Error fetching voucher data:", error);  // In lỗi nếu có
                setError("Không thể tải dữ liệu voucher. Vui lòng thử lại sau.");
            } finally {
                setLoading(false);  // Tắt trạng thái tải
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (newVoucher) {
            setData((prevData) => [...prevData, newVoucher]);  // Thêm voucher mới vào cuối danh sách
        }
    }, [newVoucher]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Helmet>
                <title>Quản lý voucher</title>
            </Helmet>
            <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] min-h-screen max-md:px-5 max-md:max-w-full">
                <SearchBar />
                <div className="flex flex-col pb-16 mt-6 w-full text-neutral-900 max-md:max-w-full">
                    <div className="text-right max-md:max-w-full">
                        Tổng số voucher: {data?.length || 0}
                    </div>
                    <TableHeader />
                    {error ? (
                        <div className="text-red-600">{error}</div>  // Hiển thị thông báo lỗi nếu có
                    ) : (
                        data && data.length > 0 &&
                        data.map((voucher, index) => (
                            <VoucherRow
                                key={voucher._id}
                                id={voucher._id}
                                index={index}  
                                voucher={voucher}  // Truyền dữ liệu voucher
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default VoucherList;
