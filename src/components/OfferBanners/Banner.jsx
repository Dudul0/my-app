import React from 'react'
import './banner.css'
export  function Banner () {
  return (
    <div className='banner w-full mx-2 select-none' >
        <div className="img pl-6 flex flex-col justify-evenly  rounded w-full min-h-[206px] md:min-h-[410px] ">
          <h2 className='font-bold text-white text-2xl w-full md:text-4xl'>Super Flash Sale <br />50% Off</h2>
          <div className='timer flex  relative  rounded gap-2 text-white items-center font-bold text-sm md:text-2xl'>
            <sapn className='text-textblue font-bold px-2.5 py-2 bg-white text-base rounded md:px-3.5 md:py-3 md:text-lg'>08</sapn>:
            <sapn className='text-textblue font-bold px-2.5 py-2 bg-white text-base rounded md:px-3.5 md:py-3 md:text-lg'>34</sapn>:
            <sapn className='text-textblue font-bold px-2.5 py-2 bg-white text-base rounded md:px-3.5 md:py-3 md:text-lg'>52</sapn>
          </div>
        </div>
    </div>
  )
}
