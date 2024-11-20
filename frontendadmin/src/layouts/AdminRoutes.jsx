import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoutes = () => {
  let token = (localStorage.getItem('access_token'));
  return (
    token ? <Outlet /> : <Navigate to='/login' />
  )
}

export default AdminRoutes