import React from 'react'
import {Link} from "react-router-dom"

import "../styles/Navbar.css"
export const Header = () => {
  return (
    <div className='navbar__container'>
    
    <div className='navbar__wrapper'>
        <div className='navbar__link'>
        <Link to = {`/`}> Home</Link>
        </div>

        <div className='navbar__link'>
        <Link to = {`/cart`}>
            Cart
        </Link>
        </div>
        <div className='navbar__link'>

        <Link to = {'/list'}> Login </Link>
        </div>


    </div>
    </div>
  )
}
