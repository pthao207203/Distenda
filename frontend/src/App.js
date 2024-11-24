import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import UserRoutes from './layouts/UserRoutes';
import PublicRoutes from './layouts/PublicRoutes';
import Main from './layouts/public/Main';
import AuthMain from './layouts/public/AuthMain';
import MainUser from './layouts/private/MainUser';

import Login from './screens/PublishUser/Login/Login';
import Register from './screens/PublishUser/Register/Register';
import Intro from './screens/PublishUser/Intro/LandingPage';
import CourseDetail from './screens/User/CourseDetail/CourseDetailPage';
import Courses from './screens/PublishUser/Course/CoursePage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        {/* Những trang bắt buộc phải đăng nhập thì mới được vào */}
        <Route element={<UserRoutes />}>
          {/* <Route element={<MainUser />}> */}
          {/* </Route> */}
        </Route>

        {/* Dù có đăng nhập hay không vẫn vào được */}
        <Route element={<Main />} >
          <Route path='/' element={<Intro />} />
          <Route path='/courses/Data-Analytics-Certificate' element={<CourseDetail />} />
          <Route path='/courses' element={<Courses />} />
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
  );
}

export default App;
