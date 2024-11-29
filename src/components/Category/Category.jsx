import React from 'react'
import { IconContext } from "react-icons";
import { PiShirtFoldedLight } from "react-icons/pi";
export  function Category() {
  return (
    <div className="rounded border pb-9 inline-block border-none mt-4 text-center ">
        <div className='category-card rounded-full border p-4 inline-block border-lightgray-100 '>
            <IconContext.Provider value={{ color: "#64cbff", size:'26px', className: "global-class-name" }}>
                <PiShirtFoldedLight />
            </IconContext.Provider> 
        </div>
        <p className='text-lightgray-200 font-light text-xs'>Man shirt</p>
    </div>
    
  )
}
