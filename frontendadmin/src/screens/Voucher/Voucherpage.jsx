import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import SearchBar from "./../../layouts/private/SearchBar";
import TableHeader from "./components/TableHeader";
import VoucherRow from "./components/VoucherRow";
import { vouchersController } from "../../controllers/voucher.controller.js";
import Loading from "../../components/Loading";
// import moment from 'moment';

function VoucherList() {
    const [allVouchers, setAllVouchers] = useState([]);
    const [filteredVouchers, setFilteredVouchers] = useState([]);
        const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);  // Thêm state để lưu lỗi
    const location = useLocation();
    const newVoucher = location.state?.newVoucher;  // Nhận voucher mới từ state

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const result = await vouchersController(setLoading);
                if (result) {
                    setAllVouchers(result);
                    setFilteredVouchers(result);
                }
            } catch (error) {
                setError("Không thể tải dữ liệu voucher. Vui lòng thử lại sau.");
            } finally {
                setLoading(false);
            }
        }
    
        fetchData();
    }, []);
    
    const handleSearch = (value) => {
        const keyword = value.toLowerCase();
    
        const filtered = allVouchers.filter(voucher => {
            const code = voucher.voucherCode?.toLowerCase() || "";
            const minAmount = voucher.minAmount?.toString() || "";
            const discountPercent = voucher.discountPercentage?.toString() || "";
            const discountAmount = voucher.discountAmount?.toString() || "";
            const validity = voucher.validityPeriod?.toString() || "";
            const statusText = voucher.status === 1 ? "hoạt động" : (voucher.status === 0 ? "tạm dừng" : "không xác định");
    
            return (
                code.includes(keyword) ||
                minAmount.includes(keyword) ||
                discountPercent.includes(keyword) ||
                discountAmount.includes(keyword) ||
                validity.includes(keyword) ||
                statusText.includes(keyword)
            );
        });
    
        setFilteredVouchers(filtered);
    };
    

    useEffect(() => {
        if (newVoucher) {
            setAllVouchers((prev) => [...prev, newVoucher]);       // Cập nhật dữ liệu gốc
            setFilteredVouchers((prev) => [...prev, newVoucher]);  // Cập nhật luôn dữ liệu lọc
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
            <SearchBar onSearch={handleSearch} />
                <div className="flex flex-col pb-16 mt-6 w-full text-neutral-900 max-md:max-w-full">
                    <div className="text-right max-md:max-w-full">
                    Tổng số voucher: {filteredVouchers.length}
                    </div>
                    <TableHeader />
                    {error ? (
                        <div className="text-red-600">{error}</div>  // Hiển thị thông báo lỗi nếu có
                    ) : (
                        filteredVouchers.length > 0 ? (
                            filteredVouchers.map((voucher, index) => (
                            <VoucherRow
                                key={voucher._id}
                                id={voucher._id}
                                index={index}  
                                voucher={voucher}  // Truyền dữ liệu voucher
                                />
                            ))
                        ) : (
                            <p className="mt-4 text-center">Không tìm thấy voucher nào.</p>
                        )
                    )}
                </div>
            </div>
        </>
    );
}

export default VoucherList;
