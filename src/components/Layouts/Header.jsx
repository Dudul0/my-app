import React from 'react'
import { IconContext } from "react-icons";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { GrNotification } from "react-icons/gr";
export  function  Header() {
  return (
    <header className='pb-4 xl:hidden'> 
        <nav className='container flex justify-between gap-x-4 items-center border-b  border-lightgray-100 py-4 '>
            <div className="border rounded-md   border-lightgray-100 flex gap-x-4 items-center p-4 text-xs ">
                <IconContext.Provider value={{ color: "#64cbff", className: "text-xs md:text-xl" }}>
                    <FiSearch />
                </IconContext.Provider> 
                <input type="text" placeholder='Search Product'  className="w-full md:px-16"/>
            </div>
            <div className="flex gap-x-4">
                <IconContext.Provider value={{ color: "#9098b1", className: "text-xs md:text-xl" }}>
                    <FaRegHeart />
                    <GrNotification />
                </IconContext.Provider>  
            </div>
        </nav>
        
    </header>
  )
}
