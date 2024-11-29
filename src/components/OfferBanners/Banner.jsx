import React from 'react'
import './banner.css'
export  function Banner () {
  return (
    <div className='banner w-full mx-2' >
        <div className="img pl-6 flex flex-col justify-center gap-7 rounded h-[206px]">
          <h2 className='font-bold text-white text-2xl   w-full'>Super Flash Sale <br />50% Off</h2>
          <div className='timer flex  relative  rounded gap-2 text-white items-center font-bold text-sm'>
            <sapn className='text-textblue font-bold px-2.5 py-2 bg-white text-base rounded '>08</sapn>:
            <sapn className='text-textblue font-bold px-2.5 py-2 bg-white text-base rounded'>34</sapn>:
            <sapn className='text-textblue font-bold px-2.5 py-2 bg-white text-base rounded'>52</sapn>
          </div>
        </div>
    </div>
  )
}
