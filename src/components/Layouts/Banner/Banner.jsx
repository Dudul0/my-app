import React from 'react'
import style from './banner.css'
export  function Banner () {
  return (
    <div className='banner w-full' >
        <div className="img bg-neutral-600 rounded">
          <h2 className='font-bold text-white text-2xl inset-x-6 top-8 relative '>Super Flash Sale <br />50% Off</h2>
          <div className='timer flex top-14 left-6 relative  rounded gap-2 text-white items-center font-bold text-sm'>
            <div className='text-stone-700 font-bold px-2.5 py-2 bg-white text-base rounded '>08</div>:
            <div className='text-stone-700 font-bold px-2.5 py-2 bg-white text-base rounded'>34</div>:
            <div className='text-stone-700 font-bold px-2.5 py-2 bg-white text-base rounded'>52</div>
          </div>
        </div>
    </div>
  )
}
