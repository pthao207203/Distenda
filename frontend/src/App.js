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
import CoursePractice from './screens/PublishUser/CoursePractice/CourseLayout';
import CourseCode from './screens/PublishUser/CourseCode/CourseLayout';
import CoursesCode from './screens/PublishUser/CoursesCode/Layout';
import Category from './screens/PublishUser/Category/CategoryPage';
import ScrollToTop from "./components/ScrollToTop";
import UserProfile from './screens/User/ProfileUser/ProfilePage';

import MyCoursePurchased from './screens/PublishUser/MyCoursePurchased/CoursePage';
import MyCourseCompleted from './screens/PublishUser/MyCourseCompleted/CoursePage';
import MyCourseStudying from './screens/PublishUser/MyCourseStudying/CoursePage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>

          {/* Những trang bắt buộc phải đăng nhập thì mới được vào */}
          <Route element={<UserRoutes />}>
            <Route element={<MainUser />}>
              <Route path='/user/profile' element={<UserProfile />} />
            </Route>
            <Route element={<MainPublic />} >
              <Route path='/courses/CoursePurchased/:CourseSlug' element={<CoursePurchased />} />
              {/* <Route path='/courses/CourseStudying/:CourseSlug' element={<CourseStudying />} /> */}
              <Route path='/courses/CoursePurchased/:CourseSlug/:VideoSlug' element={<CoursePractice />} />
              <Route path='/courses/CourseCode' element={<CourseCode />} />
              <Route path='/courses/CoursePurchased/:CourseSlug/CourseCode/:ExerciseSlug' element={<CoursesCode />} />
            </Route>
          </Route>
          {/* Dù có đăng nhập hay không vẫn vào được */}
          {/* Tuỳ vào đăng nhập mà có hiện hay không */}
          <Route element={<Main />} >
            <Route path='/courses' element={<Courses />} />
            <Route path='/category/:CategorySlug' element={<Category />} />
            <Route path='/courses/CoursePurchased' element={<MyCoursePurchased />} />
            <Route path='/courses/CourseCompleted' element={<MyCourseCompleted />} />
            <Route path='/courses/CourseStudying' element={<MyCourseStudying />} />
          </Route>
          {/* Những trang không hiện sidebar */}
          <Route element={<MainPublic />} >
            <Route path='/' element={<Intro />} />
            <Route path='/courses/:CourseSlug' element={<CourseDetail />} />
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
