import React from 'react'
import Paragraph from './Paragraph'
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { Sparkles } from 'lucide-react';
const paragraph:string ="PathVisualizer.io is an all-in-one learning platform that combines detailed documentation with an interactive pathfinding visualizer. It offers both theoretical knowledge and practical simulations, making it the perfect resource for mastering algorithms and data structures in a hands-on way.";


const About = () => {
  return (
    <main className="bg-black  text-white h-fit ">
      {/* Spacer before */}
      <div className="h-[10vh]">
      </div>
      <div className='flex items-center justify-center'>
      {/* <h1 className="text-4xl ml-10 font-semibold">What is PathVisualizer.io?</h1> */}
      <HoverBorderGradient containerClassName="text-xs">
  <div className="flex items-center gap-x-2">
    <Sparkles className="w-4 h-4 text-yellow-300" />
    <h1>Introducing PathVisualizer</h1>
  </div>
</HoverBorderGradient>

      </div>
      {/* Animated Paragraph */}
      <div className='w-[80%] flex flex-col justify-center items-center mx-auto gap-0'>
      <Paragraph paragraph={paragraph} />
      </div>

      {/* Spacer after */}
      <div className="h-[10vh]"></div>
    </main>
  )
}

export default About