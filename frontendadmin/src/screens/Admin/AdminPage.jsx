import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import AdminTable from "./components/AdminTable";
import AddAccountButton from "./components/AddAccountButton";
import SearchBar from "../../layouts/private/SearchBar";
import { adminController } from "../../controllers/admin.controller";

import Loading from "../../components/Loading";
import HistoryButton from "../../components/HistoryButton";
import AdminHistory from "./components/AdminHistory";

import moment from 'moment';


function AdminPage() {
  const [allAdmins, setAllAdmins] = useState([]);
  const [filteredAdmins, setFilteredAdmins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const handleHistoryRequest = () => {
    setIsHistoryVisible(true);
  };

  const handleCloseHistoryRequest = () => {
    setIsHistoryVisible(false);
  };

  useEffect(() => {
    async function fetchData() {
      const result = await adminController(setLoading);
      if (result) {
        setAllAdmins(result);
        setFilteredAdmins(result);
      }
    }

    fetchData();
  }, []);

  const handleSearch = (value) => {
    const keyword = value.toLowerCase();

    const filtered = allAdmins.filter(admin => {
      const fullName = admin.AdminFullName?.toLowerCase() || "";
      const roleName = admin.role?.RoleName?.toLowerCase() || "";

      const joinDate = admin.createdBy?.createdAt
        ? moment(admin.createdBy.createdAt).format("DD/MM/YYYY hh:mm:ss")
        : "";

      const statusText = admin.AdminDeleted === 1 ? "đang hoạt động" : "tạm dừng";

      return (
        fullName.includes(keyword) ||
        roleName.includes(keyword) ||
        joinDate.includes(keyword) ||
        statusText.includes(keyword)
      );
    });

    setFilteredAdmins(filtered);
  };


  if (loading) {
    return <Loading />;
  }
  console.log("Admin => ", allAdmins);
  const totalAdmin = filteredAdmins.length;
  return (
    <>
      <Helmet>
        <title>Quản trị viên</title>
      </Helmet>
      <main className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <section className="flex gap-3">
          <AddAccountButton />
          <HistoryButton onClick={handleHistoryRequest} />
        </section>
        <section className="flex flex-wrap gap-3 mt-3 max-md:max-w-full">
          <SearchBar onSearch={handleSearch} />
        </section>
        <div className="flex flex-col mt-6 w-full text-neutral-900 max-md:max-w-full">
          <div className="text-right max-md:max-w-full">
            Tổng số quản trị viên: {totalAdmin}
          </div>
        </div>
        {/* Bảng quản lý admin */}
        <section className="flex flex-col mt-3 w-full text-[#131313] max-md:max-w-full">
          {/* Header của bảng */}
          <div className="flex overflow-hidden w-full rounded-t-3xl bg-[#6C8299] min-h-[70px] max-md:max-w-full">
            {/* Cột ID */}
            <div className="flex basis-1/5 min-w-0 justify-center items-center text-white">
              <span className="text-center">Ảnh đại diện</span>
            </div>

            {/* Cột Tên người dùng */}
            <div className="flex basis-1/5 min-w-0 justify-center items-center bg-[#EBF1F9]">
              <span className="text-center">Họ và tên</span>
            </div>

            {/* Cột Chức vụ */}
            <div className="flex basis-1/5 min-w-0 justify-center items-center text-white">
              <span className="text-center">Chức vụ</span>
            </div>

            {/* Cột Thời gian tham gia */}
            <div className="flex basis-1/5 min-w-0 justify-center items-center bg-[#EBF1F9]">
              <span className="text-center">Thời gian tham gia</span>
            </div>

            {/* Cột Trạng thái */}
            <div className="flex basis-1/5 min-w-0 justify-center items-center text-white">
              <span className="text-center">Trạng thái</span>
            </div>
          </div>

          {/* Nội dung bảng */}
          {filteredAdmins.length > 0 ? (
            filteredAdmins.map((admin, index) => (
              <AdminTable key={index} {...admin} />
            ))
          ) : (
            <p className="mt-4 text-center">Không tìm thấy quản trị viên nào.</p>
          )}

        </section>
      </main>
      {isHistoryVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 max-md:px-10 overflow-hidden">
          <AdminHistory onClose={handleCloseHistoryRequest} />
        </div>
      )}
    </>
  );
}

export default AdminPage;
