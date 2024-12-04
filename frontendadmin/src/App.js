import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import AdminRoutes from './layouts/AdminRoutes';
import PublicRoutes from './layouts/PublicRoutes';
import Main from './layouts/public/Main';
import MainAdmin from './layouts/private/MainAdmin';
import Dashboard from './screens/DashBoard/DashBoardPage';
import Courses from './screens/Courses/CoursesListPage';
import LongTermCoursePage from './screens/LongTermCourse/LongTermCoursePage';


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        {/* <Route element={<AdminRoutes />}> */}
          <Route element={<MainAdmin />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/courses' element={<Courses/>}/>
                <Route path="/long-term-course" element={<LongTermCoursePage />} />
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
