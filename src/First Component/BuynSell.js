import React from 'react'
import { Link } from 'react-router-dom'
import Playstore from './Project Images/Group 53.svg'
import Apple from './Project Images/Icon awesome-apple.svg'

const BuynSell = () => {
  return (
    <div className='BuynSell'>
        <div className='text'>
            <h1>Buy,sell and manage your Crypto on TradExpress</h1>
            <p>Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN</p>
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

export default BuynSell