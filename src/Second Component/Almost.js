import React from 'react'
import Mailing from '../First Component/Project Images/mailing.svg'

const Almost = () => {
  return (
    <div className='almost'>
        <h2>You're Almost In</h2>

        <h1>Welcome Temitope</h1>

        <img src={Mailing} alt="" />

        <p className='activation'>An activation link has been sent to Ireti4tech@gmail.com Please click on the link to verify your email and activate your TradExpress account.</p>

        <button>Continue</button>

        <div>
            <p>Didn't get an email? <a href="#">Kindly click resend email</a></p>
            <p>Wrong email supplied? <a href="#">Edit email address</a></p>
        </div>
        
    </div>
  )
}

export default Almost