import React from 'react'
import FlashSaleSlider from './FlashSaleSlider.jsx'
import { Link } from 'react-router-dom'

export  function FlashsaleWrappper() {
  return (
    <section className=''>
      <div className=' mt-12 flex justify-between'>
         <span className='text-textblue font-bold'> FlashSale </span> 

         <span  className='text-skyblue font-bold'><Link to='/productList'> See More </Link></span>
      </div>   
      <FlashSaleSlider />
    </section>
  )
}
