import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Protected({user,role}) {
    if (!user) {
        return <Navigate to="/login" replace />;
      }
    
      if (role && user.role !== role) return <Navigate to="/403" replace />;
      return <Outlet />;
}

export default Protected