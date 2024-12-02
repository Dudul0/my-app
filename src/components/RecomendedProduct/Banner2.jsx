import React from 'react'
import './banner2.css'
export  function Banner () {
  return (
    <div className='banner w-full mt-12 select-none' >
        <div className="banner2 pl-6 flex flex-col   rounded w-full min-h-[206px] md:min-h-[410px] ">
          <h2 className='mt-8 font-bold text-white text-2xl w-full md:text-4xl'>Recomended<br />Product</h2>
          <h2 className='mt-4 font-thin text-white text-xs w-full md:text-lg ' >We recommend the best for you</h2>
        </div>
    </div>
  )
}
