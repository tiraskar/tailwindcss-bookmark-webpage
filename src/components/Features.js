import React from 'react'

const Features = ({ feature }) => {
  const { pic, heading, description } = feature
  console.log(pic, heading, description)
  return (
    <div className='container mx-auto'>
      {/* tabs items */}

      <div className='flex flex-col py-5 md:flex-row md:space-x-7 '>
        {/* panel image */}
        <div className='flex justify-center md:w-1/2'>
          <img src={pic} alt='' className='relative z-10' />
        </div>
        {/* panel content */}
        <div className='flex flex-col space-y-8 md:w-1/2'>
          <h3 className='mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left'>
            {heading}
          </h3>
          <p className='max-w-md text-center text-grayishBlue md:text-left'>
            {description}
          </p>
          <div className='mx-auto md:mx-0'>
            <button className='px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2'>
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
