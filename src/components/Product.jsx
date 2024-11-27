import React from 'react'
import productIMaage from '../images/discountCards/product1.png'

export  function Product() {
  return ( 
    <div className='rounded border   border-neutral-200 py-4 px-4 flex  flex-wrap m-auto mr-1.5'>
      <img src={productIMaage}  alt="Description of the product"/>

      <span className='w-full text-xs font-bold my-3'>FS - Nike Air Max 270 React...</span>
      <span className='w-full text-xs font-bold  my-3  text-sky-400'>$299,43</span>

      <span ><span className='w-full text-xs font-thin line-through  my-3  inline mr-3'>$534,33  </span> <span className=' text-xs no-underline font-bold  text-red-600'>24% Off</span></span>
    </div>
  )
}