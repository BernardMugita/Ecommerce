import React from 'react'
import '../register/Register.css'

function Register() {
  return (
    <div className='Register'>
        <div className="register_form">
            <h3>Create New Account</h3>
            <label htmlFor="">
                <input type="text" placeholder='Enter First Name'/>
            </label>
            <label htmlFor="">
                <input type="text" placeholder='Enter Last Name'/>
            </label>
            <label htmlFor="">
                <input type="text" placeholder='Enter User Name'/>
            </label>
            <label htmlFor="">
                <input type="text" placeholder='Enter Email Address'/>
            </label>
            <label htmlFor="">
                <input type="text" placeholder='Enter Password'/>
            </label>
            <label htmlFor="">
                <input type="text" placeholder='Enter Confirm Password'/>
            </label>
            <p>By Creating an account, I consent to processing of my
                personal data in accordance with the <strong>PRIVACY POLICY</strong>
            </p>
        <div className="registerbtn">
            <button>Register</button>
        </div>
        </div>
    </div>
  )
}

export default Register