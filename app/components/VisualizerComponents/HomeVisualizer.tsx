"use client"
import { useTabStore } from '@/app/hooks/visualizerStore'
import React from 'react'
import PathVisualizer from "@/app/assets/PathVisualizer.png"
import Card from '../Card'



const HomeVisualizer = () => {
  const {tabs}=useTabStore();
  return (
    <>
    <div>
      {/* <h1>Saved</h1> */}
    </div>
    <div className="  bg-white shadow w-[80%] h-fit rounded-lg p-2  border relative border-[#5c5b5b14]">

      <h2 className='font-semibold text-base text-black'>Recent Visualizer-Instances</h2>
      <div className='flex gap-2 mt-4 '>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={` cursor-pointer
            `}
          
        >
          {/* <img src={PathVisualizer.src} className='w-[20%] h-[20%] border border-black  rounded-lg' alt='path-visualizer-image'/>
          <h1 className="text-sm text-neutral-500">Title : <span className='text-black font-bold'>{tab.title}</span> </h1> */}
          
          <Card img={PathVisualizer.src} title={tab.title} />
        </div>
        
      ))}
      </div>
      
    </div>
    </>
  )
}

export default HomeVisualizer