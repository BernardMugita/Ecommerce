import React, { useState } from 'react'
import '../login/Login.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {login} from '../redux/apiCalls'
import styled from 'styled-components'

export default function Login() {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e)=> {
    e.preventDefault()
    login(dispatch, {username, password})
  }

  const Error = styled.span`
    color: red;
    background-color: #fff;
  `

  return (
    <div className='Login'>
        <div className="login_form">
          <h3>Login into an Existing Account</h3>
            <label htmlFor="Uname">Username:
                <input type="text" placeholder='Type Username' required onChange={(e) => setUserName(e.target.value)}/>
            </label>
            <label htmlFor="PWord">Password:
                <input type="password" placeholder='Type Password' required onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <div className="loginbtn">
                <button onClick={handleClick} disabled={isFetching}>Login</button>
            </div>
            {error && <Error>Something Weth Wrong</Error>}
                  <p>Don't have an account?
                    <Link to="/Register">Register</Link>
                  </p>
        </div>
    </div>
  )
}
