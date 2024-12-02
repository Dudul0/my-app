import React from 'react'

export  function Product({productImg, productName, productPrice, productDiscount}) {
  const discount = (price, discount) => price / 100 * discount
  return ( 
    <div className='rounded border border-lightgray-100 py-4 px-4 flex justify-center text-center flex-wrap m-auto mr-1.5 mt-3.5 select-none' >
      <img src={productImg}  alt="Description of the product"/>

      <span className='w-full text-xs font-bold my-3'>{productName}</span>
      <span className='w-full text-xs font-bold  my-3  text-skyblue'>${discount(productPrice, productDiscount)}</span>

      <span ><span className='w-full text-xs text-lightgray-200 font-thin line-through  my-3  inline mr-3'>{productPrice}  </span> <span className=' text-xs no-underline font-bold  text-discount'>{productDiscount}% Off</span></span>
    </div>
  )
}