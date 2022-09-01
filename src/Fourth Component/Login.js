import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/FourthComp.css'

const Login = () => {
  return (
    <div className='login'>
        <h1>Welcome Back!</h1>

        <div className='inps'>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
        </div>

        <div className='check'>
            <div className='checkbox'>
                <input type="checkbox" name="remember" id="remember" /> 
                <p>Remember Me</p>
            </div>
            <a href="#">Forgot Password?</a>
        </div>

        <button>Log In</button>

        <p className='click'>New User? <Link to="/Individual">Click here</Link></p>
        

    </div>
  )
}

export default Login