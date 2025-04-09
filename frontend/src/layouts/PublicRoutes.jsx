import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie';

const PublicRoutes = () => {
  let token = Cookies.get('user_token');
  console.log("token ", token)
  return (
    !token ? <Outlet /> : <Navigate to='/' />
  )
}

export default PublicRoutes