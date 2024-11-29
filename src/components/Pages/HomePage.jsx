import React from 'react'
import { Footer }  from '../Layouts/Footer.jsx'
import { Header } from '../Layouts/Header.jsx'
import { FlashsaleWrappper } from '..//FlashSale/FlashsaleWrappper.jsx'
import  BannerSlider  from '..//OfferBanners/OfferBannerSlider.jsx'
import {CategoryWrapper} from '..//Category/CategoryWrapper.jsx'
export default function HomePage() {
  return (
    <>
        <main className='container'>
          <BannerSlider />
          <CategoryWrapper />
          <FlashsaleWrappper />
        </main>
    </>
  )
}
