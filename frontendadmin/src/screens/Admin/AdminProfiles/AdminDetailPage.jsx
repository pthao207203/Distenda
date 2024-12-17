import React, { useState, useEffect } from "react";
import PersonalInfo from "./components/PersonalInfo";
import CourseTableRow from "./components/CourseTableRow";
import { adminDetailController } from "../../../controllers/admin.controller";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";

function AdminDetailPage() {
  
  const { AdminID } = useParams(); // Lấy giá trị UserID từ URL
  console.log("ID from URL: ", AdminID);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [roles, setRoles] = useState([]); // Mảng roles duy nhất

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const result = await adminDetailController(AdminID, setLoading);

      if (result) {
        setData(result);

        // Set roles với giá trị mặc định từ data
        setRoles([
          { _id: result.role?.RoleName || "", RoleName: result.role?.RoleName || "Chọn chức vụ", disabled: true },
          ...(result.roles || []), // Thêm các roles khác nếu có
        ]);
      }
      setLoading(false);
    }

    fetchData();
  }, [AdminID]);
  
  if (loading) {
    return <Loading />;
  }
  console.log("Admin Detail => ", data)
  const totalCourse = data?.course.length || 0; // Đảm bảo không lỗi nếu data undefined

  return (
    <div className="flex overflow-hidden flex-col px-16 pt-16 bg-white min-h-screen max-md:px-5">
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        {/* Thông tin giảng viên */}
        <div className="flex flex-wrap flex-1 shrink gap-4 items-center basis-0 min-w-[240px] max-md:max-w-full">
          <img
            loading="lazy"
            src={data?.AdminAvatar ? data.AdminAvatar : "https://cdn.builder.io/api/v1/image/assets/TEMP/9f4c77a7cd8d0d6938085c2329962000d9898f65d43cbc645023d10de84cf689?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"}
            alt="Instructor profile"
            className="object-cover rounded-full shrink-0 self-stretch my-auto aspect-square w-[119px]"
          />
          <div className="flex flex-col self-stretch my-auto">
            <div className="text-2xl font-semibold text-neutral-900">
              {data?.AdminFullName ? data?.AdminFullName : "Null"}
            </div>
            <div className="mt-3 text-lg font-medium text-neutral-900 text-opacity-50">
              {data?.AdminEmail ? data.AdminEmail : "Null"}
            </div>
          </div>
        </div>
        {/* Nút hành động */}
        <div className="flex gap-2.5 items-center text-xl font-medium leading-none text-white min-w-[240px]">
        <button className="flex gap-3 justify-center items-center self-stretch px-3 py-3 my-auto rounded-lg bg-slate-500 min-h-[46px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/84fdfd4c4d34c64c558acb40d245b2d594b0b0f000c7b4c1dd0353682f135f9d?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <span className="gap-2.5 self-stretch my-auto">Cập nhật</span>
          </button>
          <button className="flex gap-3 justify-center items-center self-stretch px-3 py-3 my-auto whitespace-nowrap bg-red-600 rounded-lg min-h-[46px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/39a71fd8008a53a09d7a877aea83770214d261a5f742c728f7c5a0a06accb635?placeholderIfAbsent=true&apiKey=bb36f631e8e54463aa9d0d8a1339282b"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <span className="gap-2.5 self-stretch my-auto">Chặn</span>
          </button>
        </div>
      </div>

      {/* Thông tin cá nhân */}
      <PersonalInfo
        name={data?.AdminFullName || "Null"}
        email={data?.AdminEmail || "Null"}
        phone={data?.AdminPhone || "Null"}
        positionOptions={roles} // Dữ liệu roles đầy đủ (_id và RoleName)
        position={data?.role?.RoleName|| ""} // Giá trị mặc định là _id
        status={data?.AdminStatus || "Null"}
      />

      {/* Tiêu đề Khóa học */}
      <div className="flex flex-col mt-10 w-full text-xl text-neutral-900 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
          <div className="font-semibold">Khóa học giảng viên</div>
          <div className="flex-1 shrink font-medium leading-none text-right basis-0 max-md:max-w-full">
            Tổng số khóa học: {totalCourse}
          </div>
        </div>

        {/* Header Table */}
        <div className="flex overflow-hidden flex-wrap w-full mt-3 rounded-t-3xl bg-[#6C8299] font-medium min-h-[70px] max-md:max-w-full">
          <div className="flex shrink justify-center items-center px-3 py-0 h-[70px] bg-[#EBF1F9] basis-1/6 min-w-0">
            <span className="text-center">Tên khóa học</span>
          </div>
          <div className="flex shrink justify-center items-center px-3 py-0 h-[70px] text-white basis-1/6 min-w-0">
            <span className="text-center">Tên giảng viên</span>
          </div>
          <div className="flex shrink justify-center items-center px-3 py-0 h-[70px] bg-[#EBF1F9] basis-1/6 min-w-0">
            <span className="text-center">Đã bán</span>
          </div>
          <div className="flex shrink justify-center items-center px-3 py-0 h-[70px] text-white basis-1/6 min-w-0">
            <span className="text-center">Giá</span>
          </div>
          <div className="flex shrink justify-center items-center px-3 py-0 h-[70px] bg-[#EBF1F9] basis-1/6 min-w-0">
            <span className="text-center">Lợi nhuận</span>
          </div>
          <div className="flex shrink justify-center items-center px-3 py-0 h-[70px] text-white basis-1/6 min-w-0">
            <span className="text-center">Trạng thái</span>
          </div>
        </div>

        {/* Dữ liệu Table */}
        <div className="flex overflow-hidden flex-wrap w-full rounded-b-3xl bg-white min-h-[70px] max-md:max-w-full">
          {data && data.course && data.course.length > 0 && data.course.map((course, index) => (
          <CourseTableRow
            index={index}
            name={data?.AdminFullName}
            course={course}
          />
            ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDetailPage;
