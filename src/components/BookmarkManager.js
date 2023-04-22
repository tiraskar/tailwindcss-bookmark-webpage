import React from 'react'
import heroImage from '../assets/images/illustration-hero.svg'
const BookmarkManager = () => {
  return (
    <div className='container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0'>
      {/* Content */}
      <div className='flex flex-col space-y-10 lg-mt-16 mt:w1/2'>
        <h1 className='text-3xl font-semibold text-center lg:text-6xl lg:text-left'>
          A Simple Bookmark Manager
        </h1>
        <p className='max-w-lg mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0 '>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        {/* Buttons Container */}
        <div className='flex items-center justify-center w-full space-x-4 lg:justify-start'>
          <button
            href=''
            className='p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-lg border-2 border-softBlue lg:text-base hover:bg-white hover:text-softBlue'
          >
            Get it on Chrome
          </button>
          <button className='p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-lg border-2 border-gray-300 lg:text-base hover:bg-white hover:text-gray-600'>
            Get it on Firefox
          </button>
        </div>
        {/* Image */}
      </div>
      <div className='relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2'>
        <div className='bg-hero'></div>
        <img
          src={heroImage}
          alt=''
          className='relative z-10 lg:top-24 xl:top-0 overflow-x-visible'
        />
      </div>
    </div>
  )
}

export default BookmarkManager
