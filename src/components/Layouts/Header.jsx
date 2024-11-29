import React from 'react'
import { IconContext } from "react-icons";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { GrNotification } from "react-icons/gr";
export  function  Header() {
  return (
    <header className='py-4 '> 
        <nav className='container flex gap-x-4 items-center border-b py-4 border-lightgray-100 '>
            <div className="border rounded-md text-xs flex gap-x-4 items-center pl-4 p-4 border-lightgray-100 ">
                <IconContext.Provider value={{ color: "#64cbff", size:'16px', className: "global-class-name" }}>
                    <FiSearch />
                </IconContext.Provider> 
                <input type="text" placeholder='Search Product'  className="w-max"/>
            </div>
            <div className="flex gap-x-4">
                <IconContext.Provider value={{ color: "#9098b1", size:'24px', className: "global-class-name" }}>
                    <FaRegHeart />
                    <GrNotification />
                </IconContext.Provider>  
            </div>
        </nav>
        
    </header>
  )
}
