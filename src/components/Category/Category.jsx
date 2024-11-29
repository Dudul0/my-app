import React from 'react'
import { IconContext } from "react-icons";
import { PiShirtFoldedLight } from "react-icons/pi";
export  function Category() {
  return (
    <div className="rounded border pb-9 inline-block border-none pt-9 text-center w-full">
        <div className='inline-block rounded-full border-lightgray-100 border p-4  md:p-8 '>
            <IconContext.Provider value={{ color: "#64cbff",  className: "text-lg md:text-5xl" }}>
                <PiShirtFoldedLight />
            </IconContext.Provider> 
        </div>
        <p className='text-lightgray-200 font-light text-xs md:text-lg'>Man shirt</p>
    </div>
    
  )
}
