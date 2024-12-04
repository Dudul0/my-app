import React from 'react'
import './banner.css'
import { Link } from 'react-router-dom'


export  function Banner ({time}) {

  const { hours, minutes, seconds } = time 

  const zeroCheck = (date) => date < 10 ? '0' + date  : date

  return (
    <div className='banner w-full mx-2 select-none' >
      <Link to='/superFashSale'> 
        <div className="banner1 pl-6 flex flex-col justify-evenly  rounded w-full min-h-[206px] md:min-h-[410px] ">
          <h2 className='font-bold text-white text-2xl w-full md:text-4xl'>Super Flash Sale <br />50% Off</h2>
          <div className='timer flex  relative  rounded gap-2 text-white items-center font-bold text-sm md:text-2xl'>
            <sapn className='text-textblue font-bold px-2.5 py-2 bg-white text-base rounded md:px-3.5 md:py-3 md:text-lg'>{zeroCheck(hours)}</sapn>:
            <sapn className='text-textblue font-bold px-2.5 py-2 bg-white text-base rounded md:px-3.5 md:py-3 md:text-lg'>{zeroCheck(minutes)}</sapn>:
            <sapn className='text-textblue font-bold px-2.5 py-2 bg-white text-base rounded md:px-3.5 md:py-3 md:text-lg'>{zeroCheck(seconds)}</sapn>
      
          </div>
        </div>
      </Link>
    </div>
  )
}
