import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import AdminRoutes from './layouts/AdminRoutes';
import PublicRoutes from './layouts/PublicRoutes';
import Main from './layouts/public/Main';
import MainAdmin from './layouts/private/MainAdmin';
import Dashboard from './screens/DashBoard/DashBoardPage';
import Courses from './screens/Courses/CoursesListPage';
import LongTermCoursePage from './screens/LongTermCourse/LongTermCousePage';
import UserTable from './screens/UserTable/UserTablePage';
import UserProfile from './screens/UserDetail/UserProfilePage';
import PaymentTablePage from './screens/Payment/PaymentTablePage';
import InvoiceDetails from './screens/InvoiceDetails/InvoiceDetailsPage';
import CourseAdmin from './screens/CourseAdmin/CourseContent';
import CourseBuilder from './screens/CourseBuilder/CourseBuilder';
import CourseCreation from './screens/CourseCreation/CourseCreation';
import Permission from './screens/Permission/PermissionPage';


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      
      <Route path="/courseadmin" element={<CourseAdmin />} />
      <Route path="/coursebuilder" element={<CourseBuilder />} />
      <Route path="/coursecreation" element={<CourseCreation />} />

        {/* <Route element={<AdminRoutes />}> */}
          <Route element={<MainAdmin />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/courses' element={<Courses/>}/>
                <Route path="/long-term-course" element={<LongTermCoursePage />} />
            <Route path='/user' element={<UserTable/>} />
            <Route path="/user-details/:id" element={<UserProfile />} /> {/* Route tới UserProfile */}
            <Route path="/payment" element={<PaymentTablePage />} />
            <Route path="/invoicedetails/:id" element={<InvoiceDetails />} /> {/* Route tới InvoiceDetails */}
            <Route path="/permission" element={<Permission />} />
          </Route>
        {/* </Route> */}

        {/* <Route element={PublicRoutes}> */}
        {/* <Route element={<Main />}> */}
        {/* <Route path='/login' element={<Login />} /> */}
        {/* </Route>
        </Route> */}
      </Route>
    </Routes>
  );
}

export default App;
