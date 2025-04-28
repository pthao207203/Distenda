import './App.css';
import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';

import Layout from './layouts/Layout';
import UserRoutes from './layouts/UserRoutes';
import PublicRoutes from './layouts/PublicRoutes';
import Main from './layouts/public/Main';
import MainCourse from './layouts/public/MainCourse';
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
import CoursesCode from './screens/PublishUser/CoursesCode/Layout';
import Category from './screens/PublishUser/Category/CategoryPage';
import ScrollToTop from "./components/ScrollToTop";
import UserProfile from './screens/User/ProfileUser/ProfilePage';
import UserNotification from './screens/User/Notification/NotificationsPage';
import Message from "./screens/User/Message/Message";
import AIChating from './screens/User/ChatBoxAI/AIChating';
import HandlePayment from './screens/User/Payment/HandlePayment';
import MyCoursePurchased from './screens/PublishUser/MyCoursePurchased/CoursePage';
import MyCourseCompleted from './screens/PublishUser/MyCourseCompleted/CoursePage';
import MyCourseStudying from './screens/PublishUser/MyCourseStudying/CoursePage';

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
      console.log("response", `${process.env.REACT_APP_API_BASE_URL}/auth/setting`)
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/setting`, {
        method: 'GET',
      });
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

          {/* Những trang bắt buộc phải đăng nhập thì mới được vào */}
          <Route element={<UserRoutes />}>
            <Route element={<MainUser />}>
              <Route path='/user/profile' element={<UserProfile />} />
              <Route path='/user/notification' element={<UserNotification />} />
              <Route path='/user/message' element={<Message />} />
              <Route path='/user/aichating' element={<AIChating />} />
              <Route path="/courses/handle-payment" element={<HandlePayment />} />
              <Route path='/courses/CoursePurchased/:CourseSlug' element={<CoursePurchased />} />
            </Route>
            <Route element={<MainPublic />} >
              {/* <Route element={<MainCourse />} > */}
              <Route path='/courses/CoursePurchased/:CourseSlug/:VideoSlug' element={<CoursePractice />} />
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
