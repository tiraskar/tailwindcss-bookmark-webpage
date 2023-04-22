import React from 'react'
import logo from '../assets/images/logo-bookmark.svg'
import navLinks from '../utils/links'
import twitter from '../assets/images/icon-twitter.svg'
import facebook from '../assets/images/icon-facebook.svg'

const Footer = () => {
  return (
    <div className='py-16 bg-veryDarkBlue'>
      <div className='container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0'>
        <div className='flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue'>
          <img src={logo} alt='' className='mb-1 bg-white' />

          {navLinks.map((link, index) => (
            <a
              href='#features'
              key={index}
              className='uppercase hover:text-softRed'
            >
              {link.name}
            </a>
          ))}
        </div>

        <div classNameName='flex space-x-10'>
          <a href='#'>
            <img src={facebook} alt='' className='h-6 ficon' />
          </a>
          <a href='#'>
            <img src={twitter} alt='' className='h-6 ficon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
