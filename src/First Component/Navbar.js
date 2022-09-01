import React from 'react'
import '../Styles/FirstPage.css'
import TradLogo from './Project Images/TradExpress.svg'
import {CgMenuRound} from 'react-icons/cg'
import {CgCloseO} from 'react-icons/cg'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  

  return (
    <div> 
        <Navigation/> 
        <MobileNavigation/> 
        
    </div>
  )
}


const NavLinks = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/InstantBuySell">Instant Buy/Sell</Link>
                </li>

                <li>
                    Learn
                </li>

                <li>
                    <Link to="/Login">Login</Link>
                </li>

                <li>
                    <Link to="/Getstarted">Get Started</Link>
                </li>
            </ul>
        </div>

    
    )
}


const Navigation = () => {
    return (
        <nav className='Navigation'>
            <div className='Nav'>
                <Link to="/">
                    <img src={TradLogo} alt="" />
                </Link>

                <NavLinks />
            </div>
        </nav>
    )
}

const MobileNavigation = () => {
    const [Open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenuRound className='Hamburger' size='40px' color='white' onClick={()=> setOpen(!Open)}/>

    const closeIcon = <CgCloseO className='Hamburger' size='40px' color='white' onClick={()=> setOpen(!Open)}/>
    
    return (
        
        <nav className='MobileNavigation'>
            <div className='Nav'>
                <img src={TradLogo} alt="" />

                {Open? closeIcon : hamburgerIcon}
                {Open && <NavLinks />}
            </div>
        </nav>
    )
}

export default Navbar