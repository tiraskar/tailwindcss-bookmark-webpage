import React from 'react'
import downloadBrowser from '../utils/download'

const DownloadBoxes = () => {
  return (
    <div className='container mx-auto py-32'>
      <div className='relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row'>
        {downloadBrowser.map((item, index) => (
          <div
            className={`flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3`}
          >
            <div key={index} className='flex  justify-center'>
              <img src={item.pic} alt='' />
            </div>
            <h5 className='pt-6 text-xl font-bold'>{item.name}</h5>
            <p className='text-gray-400'>{item.description}</p>
            <div className='bg-dots bg-repeat-x px-6 pt-6 capitalize'>
              <button className='block w-full py-3 px-2 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue'>
                Add & Install Extension
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DownloadBoxes
