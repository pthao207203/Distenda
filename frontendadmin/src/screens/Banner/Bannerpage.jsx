import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import SearchBar from "./../../layouts/private/SearchBar";
import TableHeader from "./components/TableHeader";
import BannerRow from "./components/BannerRow";
import { bannersController } from "../../controllers/banner.controller";
import Loading from "../../components/Loading";
import HistoryButton from "../../components/HistoryButton";
import BannerHistory from "./components/BannerHistory";

function BannerList() {
  const [allBanners, setAllBanners] = useState([]);
  const [filteredBanners, setFilteredBanners] = useState([]);

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
      const result = await bannersController(setLoading);
      if (result) {
        setAllBanners(result);
        setFilteredBanners(result);
      }
    }

    fetchData();
  }, []);

  const handleSearch = (value) => {
    const keyword = value.toLowerCase();

    const filtered = allBanners.filter(banner => {
      const bannerName = banner.BannerName?.toLowerCase() || "";
      const courseName = banner.course?.CourseName?.toLowerCase() || "";

      return (
        bannerName.includes(keyword) ||
        courseName.includes(keyword)
      );
    });

    setFilteredBanners(filtered);
  };


  if (loading) {
    return <Loading />;
  } else
    return (
      <>
        <Helmet>
          <title>Quản lý banner</title>
        </Helmet>
        <div className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] min-h-screen max-md:px-5 max-md:max-w-full">
          <SearchBar onSearch={handleSearch} />
          <div className="flex flex-col pb-16 mt-6 w-full text-neutral-900 max-md:max-w-full">
            <div className="flex justify-between items-center mb-3">
              <HistoryButton onClick={handleHistoryRequest} />
              <div className="text-right max-md:max-w-full">
                Tổng số banner: {filteredBanners.length}
              </div>
            </div>
            <TableHeader />
            {filteredBanners.length > 0 ? (
              filteredBanners.map((banner, index) => (
                <BannerRow
                  key={index}
                  id={banner._id}
                  index={index + 1}
                  name={banner.BannerName}
                  linkedCourse={banner.course.CourseName}
                />
              ))
            ) : (
              <p className="mt-4 text-center">Không tìm thấy banner nào.</p>
            )}

          </div>
        </div>
        {isHistoryVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 max-md:px-10 overflow-hidden">
            <BannerHistory onClose={handleCloseHistoryRequest} />
          </div>
        )}
      </>
    );
}

export default BannerList;
