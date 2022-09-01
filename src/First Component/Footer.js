import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import {FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <h3>Products</h3>
            <p>Bitcoin</p>
            <p>Alt</p>
            <p>Fiat</p>
            <p>Refill</p>
            <p>P2P</p>
        </div>

        <div>
            <h3>Learn</h3>
            <p>Blog</p>
            <p>Help Center</p>
        </div>

        <div>
            <h3>Contact</h3>
            <p>hello@tradeexpress.com</p>
            <p>support@tradeexpress.com</p>
            <div className='icons'>
                <FaTwitter/>
                <FaTelegram/>
                <IoLogoWhatsapp/>
                <FaFacebook/>
            </div>
        </div>

        <div>
            <h3>Company</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Rates</p>
            <p>Mobile</p>
        </div>

        <div>
            <h3>Legal</h3>
            <p>Privacy Policy</p>
            <p>Anti-Money Laundering</p>
            <p>Terms and Conditions</p>
        </div>

        
    </div>
  )
}

export default Footer