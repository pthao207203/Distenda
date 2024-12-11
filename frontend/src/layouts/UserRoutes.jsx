import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie';

const UserRoutes = () => {
  let token = Cookies.get('user_token');
  return (
    token ? <Outlet /> : <Navigate to='/login' />
  )
}

export default UserRoutes