import React from 'react'
import { Footer }  from '../Layouts/Footer/Footer.jsx'
import { Header } from '../Layouts/Header/Header.jsx'
import { Banner } from '../Layouts/Banner/Banner.jsx'
import { Category } from '../Layouts/Category/Category.jsx'
import { Product } from '../Layouts/Product/Product.jsx'
export default function HomePage() {
  return (
    <>
        <Header/>
        <main className='container'>
          <Banner/>
          <Category />
          <Product />
        </main>
        <Footer />    
    </>
  )
}
