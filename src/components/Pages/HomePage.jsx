import React from 'react'
import { Footer }  from '../Layouts/Footer.jsx'
import { Header } from '../Layouts/Header.jsx'
import ProductSlider from '../ProductSlider.jsx'
import  BannerSlider  from '../BannerSlider.jsx'
import CategorySlider from '../CategorySlider.jsx'
export default function HomePage() {
  return (
    <>
        <Header/>
        <main className='container'>
          <BannerSlider />
          <CategorySlider />
          <ProductSlider />
        </main>
        <Footer />    
    </>
  )
}
