import React from 'react'
import FlashSaleSlider from './FlashSaleSlider.jsx'
import { Link } from 'react-router-dom'

export  function FlashsaleWrappper() {
  return (
    <section className=''>
      <div className=' mt-6 flex justify-between'>
         <span className='text-textblue font-bold'> Flash Sale </span> 

         <span  className='text-skyblue font-bold'><Link to='/productList'> See More </Link></span>
      </div>   
      <FlashSaleSlider />
    </section>
  )
}
