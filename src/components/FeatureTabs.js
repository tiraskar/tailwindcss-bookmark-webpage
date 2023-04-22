import React, { useState } from 'react'
import featuresItems from '../utils/features'
import Features from './Features'

const FeatureTabs = () => {
  const [choice, setChoice] = useState(0)
  return (
    <div className='container relative mx-auto my-6 mb-32 mt-12 px-6'>
      <div className='bg-tabs'></div>
      {/* tabs flex container */}
      <div className='flex flex-col max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row '>
        {featuresItems.map((feature, index) => (
          <button
            key={index}
            className={`justify-center text-center text-gray-600 border-b md:border-b-0 active:border-b-2 active:border-red-500 hover:text-softRed md:w-1/3 tab`}
            onClick={() => setChoice(index)}
          >
            {feature.name}
          </button>
        ))}
      </div>

      <Features feature={featuresItems[choice]} />
    </div>
  )
}

export default FeatureTabs
