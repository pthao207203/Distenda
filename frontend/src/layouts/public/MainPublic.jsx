import React, {useState }  from 'react'
import { Outlet } from 'react-router-dom'
import HeaderPublic from '../public/Header'
import HeaderPrivate from '../private/Header'
import Footer from '../private/Footer'
import Cookies from 'js-cookie';

const Courses = () => {
  let token = Cookies.get('user_token');
  console.log("token ", token)
  const [headerHeight, setHeaderHeight] = useState(0);
  const [headerHeightPublic, setHeight] = useState(0);
  return (
    <div className="bg-[url('../Image/BG.png')] bg-cover bg-center bg-fixed flex flex-col justify-center pb-0 bg-[#131313] min-h-screen">
      {token ? <HeaderPrivate setHeaderHeight={setHeaderHeight}/> : <HeaderPublic setHeight={setHeight}/>}
      <div  
        style={{
            paddingTop: token ? `${headerHeight}px` : `${headerHeightPublic}px`,
        }}
      >
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Courses;
