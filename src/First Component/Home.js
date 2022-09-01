import React from 'react'
import Api from './Api'
import BuynSell from './BuynSell'
import Copyright from './Copyright'
import Footer from './Footer'
import Involved from './Involved'
import Ready from './Ready'
import Review from './Review'
import Steps from './Steps'

const Home = () => {
  return (
    <div>
        <BuynSell/>
        <Api/>
        <Involved/>
        <Steps/>
        <Ready/>
        <Review/>
        <Footer/>
        <Copyright/>
    </div>
  )
}

export default Home