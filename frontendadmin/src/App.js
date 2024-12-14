import './App.css';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "./screens/ScrollToTop";
import Layout from './layouts/Layout';
//import AdminRoutes from './layouts/AdminRoutes';
import PublicRoutes from './layouts/PublicRoutes';
import Main from './layouts/public/Main';
import MainAdmin from './layouts/private/MainAdmin';
import AdminAccount from './screens/Admin/AdminAccount/AdminAccountPage';
import Banner from './screens/Banner/Bannerpage';
import AddBanner from './screens/Banner/AddBanner/AddBannerpage';
import UpdateBanner from './screens/Banner/UpdateBanner/UpdateBannerpage';
import Dashboard from './screens/DashBoard/DashBoardPage';
import Courses from './screens/Courses/CoursesListPage';
import CourseCategory from './screens/CourseCategory/CourseCategorypage';
import CourseDetails from './screens/CourseDetails/CourseDetailspage';
import LongTermCoursePage from './screens/LongTermCourse/LongTermCousePage';
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
            <Route path='/add-banner' element={<AddBanner />} />
            <Route path='/update-banner' element={<UpdateBanner />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/course-category' element={<CourseCategory />} />
            <Route path='/course-details/:id' element={<CourseDetails />} /> {/* Route tới CourseDetails */}
            <Route path="/long-term-course" element={<LongTermCoursePage />} />
            <Route path='/user' element={<UserTable />} />
            <Route path="/user-details/:id" element={<UserProfile />} /> {/* Route tới UserProfile */}
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin/create' element={<AddAdmin />} />
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
