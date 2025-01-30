import React from 'react'
import Paragraph from './Paragraph'
const paragraph:string ="PathVisualizer.io is an all-in-one learning platform that combines detailed documentation with an interactive pathfinding visualizer. It offers both theoretical knowledge and practical simulations, making it the perfect resource for mastering algorithms and data structures in a hands-on way.";


const About = () => {
  return (
    <main className="bg-black  text-white h-fit ">
      {/* Spacer before */}
      <div className="h-[10vh]">
      </div>
      <h1 className="text-4xl ml-10 font-semibold">What is PathVisualizer.io?</h1>
      {/* Animated Paragraph */}
      <Paragraph paragraph={paragraph} />

      {/* Spacer after */}
      <div className="h-[10vh]"></div>
    </main>
  )
}

export default About