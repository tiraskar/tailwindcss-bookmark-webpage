import React, { useState } from 'react'
import questions from '../utils/questions'

const QuestionFAQ = () => {
  const [state, setState] = useState(false)
  return (
    <div className='container mx-auto px-6 mb-32'>
      <div className='max-w-2xl m-8 mx-auto overflow-hidden'>
        {/* tab */}
        {questions.map((item, index) => (
          <div key={index} className='py-1 border-b outline-none group'>
            <div
              className='flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease'
              onClick={() => setState(true)}
            >
              <div className='transition duration-500 ease group-hover:text-red-500'>
                {item.question}
              </div>
              <div
                className={` ${
                  !state
                    ? 'transition duration-500 ease focus:-rotate-180 focus:text-red-500'
                    : '0'
                }`}
              >
                <svg xmlns='http://www.w3.org/2000/svg' width='18' height='12'>
                  <path
                    fill='none'
                    stroke='currentColor'
                    stroke-width='3'
                    d='M1 1l8 8 8-8'
                  />
                </svg>
              </div>
            </div>
            <div
              className={`${
                state
                  ? 'transition duration-500 group-focus:max-h-screen  ease'
                  : 'hidden max-h-0'
              } `}
            >
              <p class='py-2 text-justify text-gray-400'>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionFAQ
