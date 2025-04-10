import React from 'react'

const Hero = () => {
  return (
    <div className='flex m-6'>
       <div className='bg-red-300 w-[50%] mr-4'>
        <img className='cover' src="https://plus.unsplash.com/premium_photo-1683619761464-6b7c9a2716a8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="food" />
       </div>
       <div className='bg-[#98d1f9] rounded-[1vw] w-[50%] rounded-[1vw]'>
          <h1 className='text-6xl font-bold text-[#0e3a52] ml-14 mt-20 '>FUEL UP YOUR <br /> DAY WITH OUR <br /> PLATTER!</h1>
          <button className='text-xl ml-14 mt-20 border-2 py-3 px-5 rounded-[1vw] bg-[#ff5b27] text-white font-semibold'>ORDER BITEBOX</button>
       </div>
    </div>
  )
}

export default Hero