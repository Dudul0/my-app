import React from 'react'
import BannerSlider from '../OfferBanners/OfferBannerSlider.jsx'
import { ProductWrapper } from '../ProductList/ProductWrapper.jsx'

export default function SuperFlashSale() {
  return (
    <main className='container'>
      <BannerSlider />
      <ProductWrapper />
    </main>
  )
}
