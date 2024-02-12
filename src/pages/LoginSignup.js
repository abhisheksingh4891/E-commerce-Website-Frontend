import React from 'react'
import './CSS/LoginSignup.css'

function LoginSignup() {
  return (
    <div className='login'>
      <div className='login-container'>
        <h1>Sign Up</h1>
        <div className='login-fields'>
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='login-login'>Already have an account? <span>Login here</span></p>
        <div className='login-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, i agree to the terms & conditions.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup