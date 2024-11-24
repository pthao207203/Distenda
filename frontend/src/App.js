import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import UserRoutes from './layouts/UserRoutes';
// import PublicRoutes from './layouts/PublicRoutes';
import Main from './layouts/public/Main';
import MainUser from './layouts/private/MainUser';
import Courses from './layouts/public/Courses';

import Login from './screens/PublishUser/Login/Login';
import Register from './screens/PublishUser/Register/Register';
import Intro from './screens/PublishUser/Intro/LandingPage';
import Course from './screens/User/CourseDetail/CourseDetailPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route element={<UserRoutes />}>
          {/* <Route element={<MainUser />}> */}
          {/* <Route path='/' element={<Intro />} /> */}
          {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
          {/* </Route> */}
        </Route>

        {/* <Route element={<PublicRoutes />}> */}
        <Route element={<Main />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Intro />} />
        </Route>
        <Route element={<Courses />}>
        <Route path='/' element={<Intro />} />
          <Route path='/courses/Data-Analytics-Certificate' element={<Course />} />
        </Route>
        {/* </Route> */}

      </Route>
    </Routes>
  );
}

export default App;
