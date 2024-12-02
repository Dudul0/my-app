import React from 'react'
import MegaSaleSlider from './MegaSaleSlider.jsx'
import { Link } from 'react-router-dom'

export  function MegaSaleWrappper() {
  return (
    <section className=''>
      <div className=' mt-12 flex justify-between'>
         <span className='text-textblue font-bold'> Mega Sale </span> 

         <span  className='text-skyblue font-bold'><Link to='/productList'> See More </Link></span>
      </div>   
      <MegaSaleSlider />
    </section>
  )
}
