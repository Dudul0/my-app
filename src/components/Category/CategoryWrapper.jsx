import React from 'react'
import CategorySlider from './CategorySlider.jsx'

export  function CategoryWrapper() {
  return (
    <section >
      <div className=' mt-14 flex justify-between'>
         <span className='text-textblue font-bold md:text-xl'> Category </span> 
         <a href="" className='text-skyblue font-bold  md:text-xl'> More Category</a>
      </div>   
      <CategorySlider />
    </section>
  )
}
