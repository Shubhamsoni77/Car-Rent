import React from 'react'
import useAuth from './AuthHook'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AdminRoute = () => {

    const {user} = useSelector(state => state.auth)

    const {isLoggedIn , checkStatus} = useAuth()

    if(checkStatus) return <div>Loading...</div>


  return isLoggedIn && user.isAdmin ? <Outlet /> : <Navigate to={'/'} />
}

export default AdminRoute
