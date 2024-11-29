import React from 'react'
import FlashSaleSlider from './FlashSaleSlider.jsx'

export  function FlashsaleWrappper() {
  return (
    <section className=''>
      <div className=' mt-12 flex justify-between'>
         <span className='text-textblue font-bold'> FlashSale </span> 
         <a href="" className='text-skyblue font-bold'> See More </a>
      </div>   
      <FlashSaleSlider />
    </section>
  )
}
