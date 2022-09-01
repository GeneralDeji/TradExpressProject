import React from 'react'
import Pix from './Project Images/Group 28.svg'
import Pic from './Project Images/Group 52.svg'


const Steps = () => {
  return (
    <div className='steps'>
        <h2>Buy and Sell your Cryptocurrency in 3 simple steps</h2>

        <div className='cards-container'>
            <div className='cards'>
                <div className='img-container'>
                    <img src={Pix} alt="" />
                </div>

                <div>
                    <h3>Create a free Account</h3>
                    <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
                </div>
            </div>

            <div className='cards'>
                <div className='img-container'>
                    <img src={Pic} alt="" />
                </div>

                <div>
                    <h3>Deposit</h3>
                    <p>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>
                </div>
            </div>

            <div className='cards'>
                <div className='img-container'>
                    <img src={Pix} alt="" />
                </div>

                <div>
                    <h3>Buy/ Sell Crypto</h3>
                    <p>Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your wallet or send it easily to friends and family.</p>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Steps