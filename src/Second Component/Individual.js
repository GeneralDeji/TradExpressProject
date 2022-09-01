import React from 'react'
import { Link } from 'react-router-dom'

const Individual = () => {
  return (
    <div>
        <div className='getstarted'>
            <h1>Welcome!</h1>
            <div className='choose'>
                <Link to="/Individual" className='but butactive'> Individual</Link>

                <Link to="/Business" className='but'>Business</Link>
            </div>

            <div className='inps'>
                    <input placeholder='Username' type="text" required/>
                    <input placeholder='Full Name' type="text" required/>
                    <input placeholder='Email' type="email" required/>
                    <input placeholder='Phone Number' type="tel" required/>
                    <input placeholder='Referral Code (optional)' type="text" />
            </div>


            <p className='first'>By clicking the Sign Up button below, you agree to TradExpress <a href="#">terms and service</a></p>

            <Link to="/Almost">
              <button>Sign Up</button>
            </Link>

            <p className='already'>Already have an account <Link to="/Login">Click here</Link></p>
        
        </div>

    </div>
  )
}

export default Individual