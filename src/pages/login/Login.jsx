import './login.css';

import React, { useRef } from 'react'

export default function Login() {
  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value)
  }

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">ChatApp</h3>
          <span className="loginDesc">
            Connect with friends from around the world you on ChatApp
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input type="email" placeholder="Email" className="loginInput" ref={email}/>
            <input 
              type="password" 
              placeholder="Password" 
              className="loginInput" 
              ref={password} 
              required 
              minLength="6"/>
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegister">Create a New Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}
