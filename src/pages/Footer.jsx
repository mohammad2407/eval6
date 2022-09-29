import React from 'react'
import {FaFireAlt} from 'react-icons/fa'

import "../styles/Footer.css"
export const Footer = () => {
  return (
    <div className='footer__wrapper'>

      <div className='footer__flex'>
        <span className='foot__title'>Made with </span>
        <FaFireAlt className='foot__logo' />
      </div>
    </div>
  )
}
