import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { userInfo } from '../authContext/AuthContext'
import '../header/Header.css'

const Header = () => {
    const login = useContext(userInfo)
  return (
    <>
        <header>
            <div className="brand">
                E-COM
            </div>
            <nav>
                <p><NavLink to='/'>Home</NavLink></p>
                <p><NavLink to='/about'>About</NavLink></p>
                <p><NavLink to='/profile'>Profile</NavLink></p>
                <p><NavLink to='/contact'>Contact</NavLink></p>
            </nav>
            <div className="login">
                <p>{ login.loginInfo.userName ? <span>{login.loginInfo.userName}</span> : <NavLink to='/login'>Log-In</NavLink>}</p>
            </div>
        </header>
    </>
  )
}

export default Header