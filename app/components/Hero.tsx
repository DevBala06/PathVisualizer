import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='h-[70%] w-[90vw] mt-24  mx-auto flex flex-col items-center justify-center  '>
    <div className='flex flex-col items-center'>
       <div className='text-6xl font-bold flex items-center flex-col select-none '>
       <h1>The Pathfinding Learning <span className='text-teal-400 inline'>Framework</span> </h1>
<span className='mt-3'>for Web</span>
       </div>
        
        <h1 className='text-lg mt-12 text-neutral-400 selection:bg-teal-400 selection:text-black'>Your ultimate platform for learning pathfinding algorithms—<span className='inline bg-teal-400 select-none rounded-md px-1 text-black'>visualize, experiment</span> </h1>
        <h1 className='text-lg mt-1 text-neutral-400 selection:bg-teal-400 selection:text-black'>,and master concepts through engaging, web-based tools.</h1>
    </div>
    <div className='flex gap-4 mt-7 justify-center items-center'>
  <Link href={"/docs"} className="text-sm text-black font-semibold bg-white px-4 py-2 rounded-md">
    Get Started
  </Link>
  <Link href={"/docs"} className="m-1 relative overflow-hidden group text-sm border font-semibold border-zinc-800 px-4 py-2 rounded-md">
    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-28 bg-gray-300 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
    <span className="relative text-white transition duration-300 group-hover:text-black ease">Learn</span>
  </Link>
</div>

    </div>
    </>
  )
}

export default Hero