import React from 'react'
import Filter2 from './Filter2'

const Banner = () => {
  return (
    <div className="slider flex flex-col-reverse md:flex-row bg-[#f2f2f2]">
    <div className="left flex flex-col justify-center items-center md:items-baseline py-12 ml-32 space-y-5">
      <Filter2/>
      </div>
    <div className="right">
      <img className="w-[60rem] md:w-[64rem]" src="assets/ms.webp" alt="" />
      <a>s</a>
    </div>
  </div>
  
  )
}

export default Banner