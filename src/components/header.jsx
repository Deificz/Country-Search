import React from 'react'
import img_logo from "../assets/Logo.png";
export default function header() {
  return (
    <>
        <div className='flex items-end text-2xl font-bold text-white'>
        <img src={img_logo} alt="" className="h-16 mt-5 ml-5" />
        <h1 className='text-red-300'>Country <span className='text-green-300'>Searcher</span></h1>
        </div>
    </>
  )
}
