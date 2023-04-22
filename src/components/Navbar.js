import React from 'react'
import logo from '../assets/images/logo-bookmark.svg'
import navLinks from '../utils/links'

const Navbar = () => {
  return (
    <div className='container relative mx-auto p-6'>
      {/* Flex container for nav items */}
      <div className='flex flex-col items-center justify-between space-x-20 my-6 md:flex-row'>
        {/* logo */}
        <div className='z-30'>
          <img src={logo} alt='' />
        </div>
        {/* Menu items */}
        <div className='hidden items-center space-x-10 uppercase text-grayishBlue md:flex'>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.to}
              className='tracking-widest hover:text-softRed'
            >
              {link.name}
            </a>
          ))}
          <button className='px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white'>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
