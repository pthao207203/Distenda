import React, { useState, useEffect } from "react";
import UserHeader from './components/UserHeader';
import PersonalInfo from './components/PersonalInfo';
import CourseTableHeader from './components/CourseTableHeader';
import CourseTableRow from "./components/CourseTableRow";
import { userDetailController } from "../../controllers/user.controller";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

function UserProfile() {
  const { UserID } = useParams(); // Lấy giá trị UserID từ URL
  console.log("ID from URL: ", UserID);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // console.log("vaof")
      const result = await userDetailController(UserID, setLoading);
      // console.log(result)
      if (result) {
        setData(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    fetchData();
  }, [UserID]);

  if (loading) {
    return (
      <Loading />
    )
  }
  console.log("User Detail => ", data)
  return (
    <div className="flex flex-col flex-1 justify-start items-center shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] min-h-screen max-md:px-5 max-md:max-w-full">
      {data && <UserHeader data={data} />}
      {data && <PersonalInfo data={data} />}
      <section className="flex flex-col pb-16 mt-3 w-full text-neutral-900 max-md:max-w-full">
        <CourseTableHeader />
        {data && data.UserCourse && data.UserCourse.length > 0 && data.UserCourse.map((course, index) => (
          <CourseTableRow
          key={index}
            index={index}
            course={course}
          />
        ))}
      </section>
    </div>
  );
}

export default UserProfile;