import React from 'react'
import { Link } from 'react-router-dom'

const Sell = () => {
  return (
    <div>
        <div className='instant'>
            <h1>Buy/Sell Instantly</h1>

            <div className='choose'>
                <Link to="/Buy" className='ins'>Buy</Link>

                <Link to="/Sell" className='ins insactive'>Sell</Link>
            </div>

            <div className='selects-container'>
                <div className='selects'>
                    <label for="coins">Coins to Sell</label>

                    <select name="coins" id="coins">
                        <option value="btc">Bitcoin (BTC)</option>
                        <option value="eth">Etheruem (ETH)</option>
                        <option value="usdt">USDT</option>
                        <option value="xpr">XPR</option>
                    </select>
                </div>

                <div className='selects'>
                    <label for="currency">Currency</label>

                    <select name="currency" id="currency">
                        <option value="ngn">Naira (NGN)</option>
                        <option value="usd">Dollars (USD)</option>
                        <option value="gbp">Pounds (GBP)</option>
                        <option value="eur">EURO (EUR)</option>
                    </select>
                </div>

                <div className='selects'>
                    <label>Quantity</label>
                    <input type="text" />
                </div>
            </div>

            <button>Continue</button>
        
        </div>
        

    </div>
  )
}

export default Sell