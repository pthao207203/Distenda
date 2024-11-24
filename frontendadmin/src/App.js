import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
// import AdminRoutes from './layouts/AdminRoutes';
import PublicRoutes from './layouts/PublicRoutes';
import Main from './layouts/public/Main';
import MainAdmin from './layouts/private/MainAdmin';
import DashboardPage from './screens/DashBoard/DashBoardPage';
import CoursesList from './screens/Courses/CoursesList';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route element={<AdminRoutes />}>
          <Route element={<MainAdmin />}>
            {/* <Route path='/' element={<Intro />} /> */}
            {/* <Route path='/courses' element={<Courses/>}/> */}
          </Route>
        </Route>

        <Route element={PublicRoutes}>
          <Route element={<Main />}>
            {/* <Route path='/login' element={<Login />} /> */}

          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
