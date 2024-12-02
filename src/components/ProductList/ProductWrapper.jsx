import React from 'react'
import { Product } from './Product.jsx'
import productIMaage7 from '../../images/discountCards/product7.png'
import productIMaage8 from '../../images/discountCards/product8.png'
import productIMaage9 from '../../images/discountCards/product9.png'
import productIMaage10 from '../../images/discountCards/product10.png'
export  function ProductWrapper() {
  return (
    <section className=''>
      <div className='grid grid-cols-2 grid-rows-2 gap-4 mt-12'>
        <Product productImg={productIMaage7} productName='FS - Nike Air Max 270 React... ' productPrice={534} productDiscount={24}/>
        <Product productImg={productIMaage8} productName='FS - Nike Air Max 270 React... ' productPrice={534} productDiscount={24}/>
        <Product productImg={productIMaage9} productName='FS - Nike Air Max 270 React... ' productPrice={534} productDiscount={24}/>
        <Product productImg={productIMaage10} productName='FS - Nike Air Max 270 React... ' productPrice={534} productDiscount={24}/>
      </div>   
    </section>
  )
}
