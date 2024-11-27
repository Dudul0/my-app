import React from 'react'

export  function Product() {
  return ( 
    <div className='rounded border flex-wrap w-max border-neutral-200 py-4 px-0 container justify-items-center'>
{/* <img src="../../.././images/product.jpg"  alt="Description of the product"/> */}
       <div className='w-28 h-28 bg-neutral-500 '></div>
        <p className='w-7/12 text-xs font-bold my-3'>FS - Nike Air Max 270 React...</p>
        <p className='w-7/12 text-xs font-extrabold  my-3  text-sky-400'>$299,43</p>
        <p className='w-7/12 text-xs font-thin line-through  my-3  inline'>$534,33</p> <span className=' text-xs no-underline font-bold  text-red-600'>24% Off</span>
    </div>
  )
}
