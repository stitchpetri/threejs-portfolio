import React from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
  return (
    <div id="counter" className='padding-x-lg xl:mt-0 mt-32 mb-10'>
      <div className='mx-auto grid-4-cols z-100'>
        {counterItems.map((item) => (
          <div
            key={item.label} // ✅ Correct placement and usage
            className='outline-2 outline-offset-1 outline-violet-600 bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'
          >
            <div className='counter-number text-white text-5xl font-bold mb-2'>
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className='text-white-50 text-lg'>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter