import React from 'react'
import './CSS/Loginsignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Your name' />
                    <input type="email" placeholder='Email Addres' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className='loginsignup-login'>Alredy have an account? <span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>I agree to the terms of use & privacy policy.</p>

                </div>
        </div>
      
    </div>
  )
}

export default LoginSignup
