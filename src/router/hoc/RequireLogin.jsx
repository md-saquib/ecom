import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { userInfo } from '../authContext/AuthContext'

const RequireLogin = ({children}) => {
    const login = useContext(userInfo)
    const location = useLocation();
    // console.log(location);
  if(login.loginInfo.userName){
    return children
  }else{
    return <Navigate to='/login' state={{pathname:location.pathname}}/>
  }
}

export default RequireLogin