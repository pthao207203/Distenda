import './App.css';
import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "./screens/ScrollToTop";
import Layout from './layouts/Layout';
//import AdminRoutes from './layouts/AdminRoutes';
import PublicRoutes from './layouts/PublicRoutes';
import Main from './layouts/public/Main';
import MainAdmin from './layouts/private/MainAdmin';
import AdminProfilespage from './screens/Admin/AdminProfiles/AdminProfilespage';
import AdminAccount from './screens/Admin/AdminAccount/AdminAccountPage';
import Banner from './screens/Banner/Bannerpage';
import AddBanner from './screens/Banner/AddBanner/AddBannerpage';
import UpdateBanner from './screens/Banner/UpdateBanner/UpdateBannerpage';
import Dashboard from './screens/DashBoard/DashBoardPage';
import Courses from './screens/Courses/CoursesListPage';
import CourseCategory from './screens/CourseCategory/CourseCategorypage';
import CourseDetails from './screens/CourseDetails/CourseDetailspage';
import LongTermCoursePage from './screens/LongTermCourse/LongTermCousePage';
import Chapter from './screens/Chapter/ChapterDetailspage';
import UserTable from './screens/UserTable/UserTablePage';
import UserProfile from './screens/UserDetail/UserProfilePage';
import Admin from './screens/Admin/AdminPage';
import { UserProfile as AddAdmin } from './screens/Admin/AddAdminProfile/AddAdminProfilePage';
import PaymentTablePage from './screens/Payment/PaymentTablePage';
import InvoiceDetails from './screens/InvoiceDetails/InvoiceDetailsPage';
import Login from './screens/Login/LoginAdmin'
import CourseAdmin from './screens/CourseAdmin/CourseContent';
import CourseBuilder from './screens/CourseBuilder/CourseBuilder';
import CourseCreation from './screens/CourseCreation/CourseCreation';
import Permission from './screens/Permission/PermissionPage';
import Setting from './screens/Setting/Settingpage';

import { RoleProvider } from "./layouts/AppContext";


function App() {
  const updateFavicon = (faviconURL) => {
    const link = document.querySelector("link[rel='icon']");
    if (link) {
      link.href = faviconURL; // Cập nhật link favicon
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = faviconURL;
      document.head.appendChild(newLink); // Tạo mới nếu chưa có
    }
  };
  useEffect(() => {
    console.log("vaof")
    // Giả sử bạn lấy link favicon từ API hoặc database
    const fetchFavicon = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/auth/setting`, {
        method: 'GET',
      });
      console.log("response", response)
      const data = await response.json();
      console.log("data", data)
      updateFavicon(data.WebsiteIcon); // Cập nhật favicon từ API
    };

    fetchFavicon();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>

          {/* <Route element={<AdminRoutes />}> */}
          <Route
            element={
              <RoleProvider>
                <MainAdmin />
              </RoleProvider>
            }
          >
            <Route path='/admin-account' element={<AdminAccount />} />
            <Route path='/banner' element={<Banner />} />
            <Route path='/banner/create' element={<AddBanner />} />
            <Route path='/banner/edit/:BannerID' element={<UpdateBanner />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/category' element={<CourseCategory />} />
            <Route path='/course-details/:id' element={<CourseDetails />} /> {/* Route tới CourseDetails */}
            <Route path="/long-term-course" element={<LongTermCoursePage />} />
            <Route path='/chapter' element={<Chapter />} />
            <Route path='/user' element={<UserTable />} />
            <Route path="/user-details/:UserID" element={<UserProfile />} /> {/* Route tới UserProfile */}
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin/create' element={<AddAdmin />} />
            <Route path='/addadmin' element={<AddAdmin />} />
            <Route path='/admin-profiles' element={<AdminProfilespage />} />
            <Route path="/payment" element={<PaymentTablePage />} />
            <Route path="/payment/detail/:_id" element={<InvoiceDetails />} /> {/* Route tới InvoiceDetails */}
            <Route path="/authorities" element={<Permission />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/courseadmin" element={<CourseAdmin />} />
            <Route path="/coursebuilder" element={<CourseBuilder />} />
            <Route path="/coursecreation" element={<CourseCreation />} />
          </Route>
          {/* </Route> */}

          <Route element={<PublicRoutes />}>
            <Route element={<Main />}>
              <Route path='/login' element={<Login />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
