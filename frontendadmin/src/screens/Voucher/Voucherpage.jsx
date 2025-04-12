import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import SearchBar from "./../../layouts/private/SearchBar";
import TableHeader from "./components/TableHeader";
import VoucherRow from "./components/VoucherRow";
import { vouchersController } from "../../controllers/voucher.controller.js";
import Loading from "../../components/Loading";

function VoucherList() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const result = await vouchersController(setLoading);
            if (result) {
                setData(result); // Save data if valid
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    } else
        return (
            <>
                <Helmet>
                    <title>Quản lý voucher</title>
                </Helmet>
                <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] min-h-screen max-md:px-5 max-md:max-w-full">
                    <SearchBar />
                    <div className="flex flex-col pb-16 mt-6 w-full text-neutral-900 max-md:max-w-full">
                        <div className="text-right max-md:max-w-full">
                            Tổng số voucher: {data?.length}
                        </div>
                        <TableHeader />
                        {data && data.length > 0 && data.map((voucher, index) => (
                            <VoucherRow
                                key={index}
                                id={voucher._id}
                                index={index + 1}
                                name={voucher.VoucherName}
                                linkedCourse={voucher.course.CourseName}
                            />
                        ))}
                    </div>
                </div>
            </>
        );
}

export default VoucherList;
