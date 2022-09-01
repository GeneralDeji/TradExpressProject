import React from 'react'
import Playstore from './Project Images/Group 53.svg'
import Apple from './Project Images/Icon awesome-apple.svg'
import { Link } from 'react-router-dom'

const Ready = () => {
  return (
    <div className='ready'>
        <div className='create'>
            <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
            <h3>Create your account for free and start trading today!</h3>
        </div>

        <div className='btn'> 
            <Link to="/Getstarted"><button>Get Started</button></Link>
        </div>

        <div className='get'>
            <a href="https://www.apple.com/store">
                <div className='get-container'>
                    <img src={Playstore} alt="playstore" />
                    <div>
                        <p>Get on</p>
                        <h5>Google Play</h5>
                    </div>
                </div>
            </a>

            <a href="https://play.google.com/store/games">
            <div className='get-container'>
                <img src={Apple} alt="Apple" />
                <div>
                    <p>Download on the</p>
                    <h5>App Store</h5>
                </div>
            </div>
            </a>
        </div>



    </div>
  )
}

export default Ready