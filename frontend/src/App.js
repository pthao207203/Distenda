import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import UserRoutes from './layouts/UserRoutes';
import PublicRoutes from './layouts/PublicRoutes';
import Main from './layouts/public/Main';
import MainPublic from './layouts/public/MainPublic';
import AuthMain from './layouts/public/AuthMain';
import MainUser from './layouts/private/MainUser';

import Login from './screens/PublishUser/Login/Login';
import Register from './screens/PublishUser/Register/Register';
import Intro from './screens/PublishUser/Intro/LandingPage';
import CourseDetail from './screens/User/CourseDetailPublic/CourseDetailPage';
import Courses from './screens/PublishUser/Course/CoursePage';
import CoursePurchased from './screens/PublishUser/CoursePurchased/CourseDetailPage';
import CourseCompleted from './screens/PublishUser/CourseCompleted/CoursesDetailPage';
import CoursePractice from './screens/PublishUser/CoursePractice/CourseLayout';
import CourseCode from './screens/PublishUser/CourseCode/CourseLayout';
import CoursesCode from './screens/PublishUser/CoursesCode/Layout';
import Category from './screens/PublishUser/Category/CategoryPage';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>

          {/* Những trang bắt buộc phải đăng nhập thì mới được vào */}
          <Route element={<UserRoutes />}>
            {/* <Route element={<MainUser />}> */}
            {/* </Route> */}
          </Route>

        {/* Dù có đăng nhập hay không vẫn vào được */}
        <Route element={<Main />} >
          <Route path='/courses' element={<Courses />} />
          <Route path='/category/:CategorySlug' element={<Category />} />
        </Route>
        
        <Route element={<MainPublic />} >
          <Route path='/' element={<Intro />} />
          <Route path='/courses/Data-Analytics-Certificate' element={<CourseDetail />} />
          {/* <Route path='/category/:CategorySlug' element={<Category />} /> */}
          <Route path='/courses/CoursePurchased' element={<CoursePurchased />} />
          <Route path='/courses/CourseCompleted' element={<CourseCompleted />} />
          <Route path='/courses/CoursePractice' element={<CoursePractice />} />
          <Route path='/courses/CourseCode' element={<CourseCode />} />          
          <Route path='/courses/CoursesCode' element={<CoursesCode />} />
        </Route>

          {/* Những trang đã đăng nhập thì không được vào */}
          <Route element={<PublicRoutes />}>
            <Route element={<AuthMain />}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>
          </Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
