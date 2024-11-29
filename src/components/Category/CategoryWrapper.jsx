import React from 'react'
import CategorySlider from './CategorySlider.jsx'

export  function CategoryWrapper() {
  return (
    <section >
      <div className=' mt-12 flex justify-between'>
         <span className='text-textblue font-bold'> Category </span> 
         <a href="" className='text-skyblue font-bold'> More Category</a>
      </div>   
      <CategorySlider />
    </section>
  )
}
