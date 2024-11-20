import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import UserRoutes from './layouts/UserRoutes';
// import PublicRoutes from './layouts/PublicRoutes';
import Main from './layouts/public/Main';
import MainUser from './layouts/private/MainUser';

import Login from './screens/PublishUser/Login/Login';
import Register from './screens/PublishUser/Register/Register';
import Intro from './screens/PublishUser/Intro/LandingPage';
import Home from './screens/PublishUser/Register/Register';

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
        {/* </Route> */}

      </Route>
    </Routes>
  );
}

export default App;
