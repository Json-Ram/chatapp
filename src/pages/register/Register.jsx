import './register.css';
import { useRef} from 'react';
import {useNavigate} from 'react-router-dom'

import React from 'react'
import axios from 'axios';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if(passwordConfirm.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match")
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try{
        await axios.post("auth/register", user);
        navigate("/login");
      }catch(err) {
        console.log(err)
      }
    }
  };

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
          <form className="loginBox" onSubmit={handleClick} >
          <input placeholder="Username" required ref={username} className="loginInput" />

            <input placeholder="Email" type="email" required ref={email} className="loginInput" />
            <input type="password" placeholder="Password" required ref={password} className="loginInput" />
            <input type="password" placeholder="Password Confirmation" required minLength="6" ref={passwordConfirm} className="loginInput" />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegister">Log In</button>
          </form>
        </div>
      </div>
    </div>
  )
}
