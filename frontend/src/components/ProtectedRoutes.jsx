// import { Navigate } from 'react-router-dom';

// import useAuth from '../hooks/useAuth';

// export default function ProtectedRoute({ children }) {
//   const token=localStorage.getItem("kv_token")
//   // console.log(token)
//   const isAuthenticated =token?true:false;
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// }

import React from 'react'

export const ProtectedRoutes = () => {
  return (
    <div>ProtectedRoutes</div>
  )
}

 