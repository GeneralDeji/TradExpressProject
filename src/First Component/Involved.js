import React from 'react'
import Pix from './Project Images/Group 28.svg'

const Involved = () => {
  return (
    <div className='involved'>
        <h2>Why do people get involved in Cryptocurrencies?</h2>

        <div className='crypto'>
            <div className='cards'>
                <img src={Pix} alt="" />
                <h3>Easy Mode of Payment</h3>
                <p>People can now easily send and receive money from anywhere in the world to purchase goods and pay for services.</p>
            </div>

            <div className='cards'>
                <img src={Pix} alt="" />
                <h3>Financial Freedom</h3>
                <p>Just like the internet no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money.</p>
            </div>

            <div className='cards'>
                <img src={Pix} alt="" />
                <h3>Investment</h3>
                <p>The constant demand as made Cryptocurrecies a Digital Gold used for alternative store of wealth on long term investments.</p>
            </div>

        </div>

        <div className='btn'>
            <button>Learn More</button>
        </div>
        
        
    </div>
  )
}

export default Involved