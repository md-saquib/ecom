import React, { useContext, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { userInfo } from '../../authContext/AuthContext'
import './LogSign.css'

const Login = () => {
  const location = useLocation()
  const loginInfo = useContext(userInfo)
  const navigate = useNavigate()
  const [eye ,seteye]=useState(true);
  const [data,setData]=useState({})
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const nameRef = useRef();
  const passwordRef = useRef();

  console.log(location);
  
  const nameValidation = ()=>{
    if(localStorage.getItem(`${nameRef.current.value}`)){
      let userdata = localStorage.getItem(`${nameRef.current.value}`);
      optimize1(userdata);
    }else{
      setName('User Not valid!...')
    }
  }
  const passwordValidation = ()=>{
    if(passwordRef.current.value == data.password){
      loginInfo.setLoginInfo(data)
      navigate(`${location.state.pathname}`)
      setPassword('')
    }else{
      setPassword('Wrong password !...')
    }
  }
  const optimize1 = (data)=>{
    setData(JSON.parse(data))
    setName('')
  }
  const handler = (e) => {
      e.preventDefault();
      passwordValidation();
  }
  return (
    <>
      <div className="login-body">
        <div className="login-page">
          <h1>LogIn</h1>
          <form action="" onSubmit={handler}>
            <label htmlFor="username" className='label'>User-Name
              <div className='input-div'><i className="label fa fa-user" aria-hidden="true"></i>
                <input type="text" name="" id="username" required onBlur={nameValidation} className='input'ref={nameRef} />
              </div>
              <h5 className='error'>{name}</h5>
            </label>

            <label htmlFor="password" className='label'>Password
              <div className="input-div"><i className="label fa fa-lock" aria-hidden="true"></i>
                <input type={eye ? 'password' : 'text'} name="" id="password" className='input' ref={passwordRef}/><i className={`fa fa-eye${eye ? '-slash' : ''} eye`} onClick={()=>seteye(!eye)} aria-hidden="true"></i>
              </div>
              <h5 className='error'>{password}</h5>
            </label>

            <div>
              <button className='login-button btn btn-secondary'>Login</button>
            </div>
          </form>
          <div className="info">If You are new SingIn here</div>
          <div className="signup-path" onClick={()=>navigate('/signin')}><span style={{ color: 'red' }}> Or </span>Sign-In</div>
        </div>

      </div>
    </>
  )
}

export default Login