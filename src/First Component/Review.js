import React from 'react'
import Chatbox from './Project Images/Union 1.svg'
import Quotes from './Project Images/Group 8699 (1).svg'

const Review = () => {
  return (
    <div className='review'>
        <h2>Customer's Review</h2>

        <div className='review-container'>
            <div className='container'>
                <div>
                    <div className='Chatbox'>
                        <img src={Chatbox} alt="" />
                    </div>
                    

                    <div className='thought'>
                        <img src={Quotes} alt="" />
                        <p>Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</p>
                    </div>
                </div>

                <div className='person'>
                    <h5>Ireti</h5>
                    <p>Nigeria</p>
                </div>
            </div>

            <div className='container'> 
                <div>
                    <div className='Chatbox'>
                        <img src={Chatbox} alt="" />
                    </div>
                    

                    <div className='thought'>
                        <img src={Quotes} alt="" />
                        <p>They have the best rate compared to other platforms with fast payout.</p>
                    </div>
                </div>

                <div className='person'>
                    <h5>Bayo</h5>
                    <p>USA</p>
                </div>
            </div>

            <div className='container'>
                <div>
                    <div className='Chatbox'>
                        <img src={Chatbox} alt="" />
                    </div>
                    

                    <div className='thought'>
                        <img src={Quotes} alt="" />
                        <p>Easy to fund and withdraw coins or cash on their platform, I will definitely trade with them again.</p>
                    </div>
                </div>

                <div className='person'>
                    <h5>Olagoke</h5>
                    <p>Nigeria</p>
                </div>
            </div>

        </div>

        


    </div>
  )
}

export default Review