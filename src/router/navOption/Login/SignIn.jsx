import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userInfo } from '../../authContext/AuthContext'
import './LogSign.css'


const SignIn = () => {
  const navigate = useNavigate()
  const [eye, seteye] = useState(true);
  const [name, setName] = useState('');
  const [password, setPassword] = useState(false);
  const nameRef = useRef();
  const conformPasswordRef = useRef();
  const passwordRef = useRef();
  const signinInfo = useContext(userInfo)




  const handler = (e) => {
    e.preventDefault();
    // signinInfo.setLoginInfo({
    //   userName: nameRef.current.value,
    //   password: passwordRef.current.value,
    //   conformPassword: conformPasswordRef.current.value
    // })

    if (!localStorage.getItem(`${nameRef.current.value}`)) {
      localStorage.setItem(`${nameRef.current.value}`, JSON.stringify({
        userName: nameRef.current.value,
        password: passwordRef.current.value,
        conformPassword: conformPasswordRef.current.value
      }))
      navigate('/login')
    }

  }
  const conformPasswordValidation = () => {
    if (conformPasswordRef.current.value !== passwordRef.current.value)
      setPassword(!password)
    else
      setPassword(false)
  }
  const namevalidation = () => {
    if (localStorage.getItem(`${nameRef.current.value}`))
      setName('This userName already exist...')
    else if (nameRef.current.value.length < 6)
      setName('UserName must be grater then 6 character')
    else
      setName('')
  }
  return (
    <div className="signin-body">
      <div className="signin-page">
        <h1>SignIn</h1>
        <form action="" onSubmit={handler}>
          <label htmlFor="username" className='label'>User-Name
            <div className='input-div'><i className="label fa fa-user" aria-hidden="true"></i>
              <input type="text" name="" required id="username" className='input' ref={nameRef} onBlur={namevalidation} />
            </div>
            <h5 className='error'>{name}</h5>
          </label>

          <label htmlFor="password" className='label'>Password
            <div className="input-div"><i className="label fa fa-lock" aria-hidden="true"></i>
              <input type={eye ? 'password' : 'text'} name="" id="password" className='input' ref={passwordRef} /><i className={`fa fa-eye${eye ? '-slash' : ''} eye`} onClick={() => seteye(!eye)} aria-hidden="true"></i>
            </div>
            <h5 className='error'>{password && 'Password should not match Please match..'}</h5>
          </label>
          <label htmlFor="Conform-Password" className='label'>Conform-Password
            <div className="input-div"><i className="label fa fa-lock" aria-hidden="true"></i>
              <input type={eye ? 'password' : 'text'} name="" id="Conform-Password" className='input' onBlur={conformPasswordValidation} ref={conformPasswordRef} /><i className={`fa fa-eye${eye ? '-slash' : ''} eye`} onClick={() => seteye(!eye)} aria-hidden="true"></i>
            </div>
            <h5 className='error'>{password && 'Password should not match Please match..'}</h5>
          </label>

          <div>
            <button className='login-button btn btn-secondary'>Sign-In</button>
          </div>
        </form>
        <div className="info">If you are already Signin Do Login</div>
        <div className="login-path" onClick={() => navigate('/login')}><span style={{ color: 'red' }}> Or </span>Login</div>
      </div>

    </div>
  )
}

export default SignIn