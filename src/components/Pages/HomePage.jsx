import React from 'react'
import { FlashsaleWrappper } from '..//FlashSale/FlashsaleWrappper.jsx'
import  BannerSlider  from '../OfferBanners/OfferBannerSlider.jsx'
import {CategoryWrapper} from '..//Category/CategoryWrapper.jsx'
import { MegaSaleWrappper } from '../MegaSale/MegaSaleWrappper.jsx'
import OfferBannerSlider from '../RecomendedProduct/BannerSlider.jsx'
import { ProductWrapper } from '../ProductList/ProductWrapper.jsx'
export default function HomePage() {
  return (
    <>
        <main className='container'>
          <BannerSlider />
          <CategoryWrapper />
          <FlashsaleWrappper />
          <MegaSaleWrappper />
          <OfferBannerSlider />
          <ProductWrapper />
        </main>
    </>
  )
}
