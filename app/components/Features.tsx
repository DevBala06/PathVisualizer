import React from "react";
import style from "./style/bento.module.css";
import { Activity, BookOpen, Code, Grid, Settings, Sparkle } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiMaterialformkdocs } from "react-icons/si";
import Laptop from "./Laptop";

const Features = () => {
  return (
    <section
      className="w-full h-screen flex items-center justify-center relative backdrop-blur-2xl bg-black/80  shadow-lg "
      id="features"
    >
      <div className={`${style.parent} w-[85%] h-[80%] gap-3 bento `}>
                {/* PathVisualizer Features */}
                <div
          className={`${style.div1} border rounded-2xl border-light bg-black/60 overflow-hidden hover:scale-95 transition-transform p-6 backdrop-blur-3xl border-white/10 shadow-md flex flex-col gap-6`}
        >
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-white">PathVisualizer Features</h2>
          
          {/* Pathfinding Algorithms */}
  <div>
    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
      <Activity className="w-5 h-5 text-green-400" /> Pathfinding Algorithms
    </h3>
    <p className="text-sm text-gray-400">
      Visualize the execution of powerful pathfinding algorithms in real-time with smooth animations.
    </p>
    <ul className="text-sm text-gray-400 list-disc pl-4 mt-2">
      <li>A* (A-Star) Algorithm</li>
      <li>BFS (Breadth-First Search)</li>
      <li>DFS (Depth-First Search)</li>
      <li>Dijkstra’s Algorithm</li>
      <li>Recursive Maze Generation</li>
    </ul>
  </div>

  {/* Interactive Customization */}
  <div>
    <h3 className="text-lg font-semibold text-white mt-5 flex items-center gap-2">
      <Settings className="w-5 h-5 text-yellow-400" /> Interactive Customization
    </h3>
    <p className="text-sm text-gray-400">
      Adjust grid size, control animation speed, and set custom start & end points to suit your needs.
    </p>
  </div>

          {/* Browser-Like UI & Multi-Instance Support */}
          {/* <div>
            <h3 className="text-lg font-semibold text-white">Browser-Like UI & Multi-Instance Support</h3>
            <p className="text-sm text-gray-400">
              Open multiple visualizers at once, each with independent configurations, for a seamless experience.
            </p>
          </div> */}

          {/* Integrated Algorithm Documentation */}
          {/* <div>
            <h3 className="text-lg font-semibold text-white">Integrated Algorithm Documentation</h3>
            <p className="text-sm text-gray-400">
              Learn the theoretical background of each algorithm with detailed in-app documentation.
            </p>
          </div> */}

          {/* Full-Stack Implementation */}
          {/* <div>
            <h3 className="text-lg font-semibold text-white">Full-Stack Implementation</h3>
            <p className="text-sm text-gray-400">
              A complete full-stack application with modern frontend and backend integration.
            </p>
          </div> */}

        </div>


        {/* Interactive Grid */}
        <div
          className={`${style.div2} border rounded-2xl border-light p-4 bg-black/60 backdrop-blur-lg border-white/10 shadow-md hover:scale-95 transition-transform flex flex-col gap-4`}
        >
           {/* Browser-Like UI & Multi-Instance Support */}
  <div>
    <h3 className="text-lg font-semibold text-white mt-1 flex items-center gap-2">
      <Grid className="w-5 h-5 text-purple-400" /> Multi-Instance Support
    </h3>
    <p className="text-sm text-gray-400">
      Open multiple visualizers at once, each with independent configurations, for a seamless experience.
    </p>
  </div>
          {/* <h2 className="text-xl text-white font-semibold">Interactive Grid</h2>
          <p className="text-sm text-gray-400">
            Click to place walls, adjust start and end points, and customize grid sizes.
          </p> */}
           <div>
    <h3 className="text-lg font-semibold text-white mt-5 flex items-center gap-2">
      <BookOpen className="w-5 h-5 text-red-400" /> Algorithm Documentation
    </h3>
    <p className="text-sm text-gray-400">
      Learn the theoretical background of each algorithm with detailed in-app documentation.
    </p>
  </div>
        </div>

        {/* Speed Control & Customization */}
        <div
          className={`${style.div3} relative border rounded-2xl border-purple bg-[#634CC3] border-white/10 shadow-md flex  items-center hover:scale-95 transition-transform overflow-hidden  gap-4`}
        >
        {/* MacOS Browser UI */}
  {/* <div className="bg-gray-900 rounded-t-xl px-4 py-2 flex items-center">
    <div className="flex gap-2">
      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
      <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
    </div>
    <p className="ml-auto text-gray-400 text-sm">PathVisualizer</p>
  </div> */}
  <Laptop/>
  <Sparkle className="absolute top-2 right-2 text-black
   fill-white"/>
  {/* Feature Content */}
  <div className="text-end items-end justify-end  mt-28 text-white">
    <h3 className="text-xl font-semibold">Blazing-Fast UI</h3>
    <p className="text-sm text-gray-200 ">
      Enjoy a seamless and ultra-responsive interface with optimized animations,  
      smart caching, and instant interactions.
    </p>
  </div>
  <div>

  </div>
        </div>

        {/* Performance Optimizations */}
        <div className={`${style.div4} text-white rounded-2xl flex flex-col gap-3`}>
          <div className="size-full bg-black/60  backdrop-blur-lg border border-white/10 shadow-md rounded-2xl hover:scale-95 transition-transform p-4">
            <h2 className="text-xl font-semibold">Optimized Performance</h2>
            <p className="text-sm mt-2 text-gray-400">Efficient rendering ensures smooth animations and interactions.</p>
          </div>
        </div>
        
        {/* Links */}
        <div
          className={`${style.div5} border rounded-2xl border-light bg-black/60  backdrop-blur-lg border-white/10 shadow-md flex gap-3 p-4 items-center justify-between`}
        >
          <h3 className="text-xl font-bold text-white tracking-widest">LINKS:</h3>
          <Link target="_blank" href="https://github.com/DevBala06/Pathvisualizer" className=" bg-gray-100 p-2 rounded-2xl flex items-center justify-center hover:scale-95 transition-transform cursor-pointer">
            <FaGithub className="text-3xl" />
          </Link>
          <Link target="_blank" href="https://your-pathvisualizer-demo.com" className=" bg-gray-100 rounded-2xl p-2 flex items-center justify-center hover:scale-95 transition-transform">
          <SiMaterialformkdocs className="text-3xl" />
          </Link>
        </div>

        {/* Recent Updates */}
        <div
          className={`${style.div6} text-white border rounded-2xl border-light bg-black/60  backdrop-blur-lg border-white/10 shadow-md hover:scale-95 transition-transform px-3 pt-6 flex flex-col gap-4 h-full`}
        >
          <h4 className="uppercase font-[1000] text-2xl">Recent Updates</h4>
          <ul className="text-gray-400 text-sm">
            <li>⚡ Improved Dijkstra{"'"}s Algorithm performance.</li>
            <li>🎨 New UI for grid customization.</li>
            <li>🚀 Faster rendering for large grids.</li>
          </ul>
        </div>

        {/* User Feedback */}
        <div
          className={`${style.div7} border rounded-2xl border-light bg-black/60  backdrop-blur-lg border-white/10 shadow-md`}
        >
          <div className="size-full flex flex-col p-2">
            {/* Full-Stack Implementation */}
  <div>
    <h3 className="text-base font-semibold text-white flex items-center gap-2">
      <Code className="w-5 h-5 text-cyan-400" /> Full-Stack Implementation
    </h3>
    <p className="text-xs w-full text-gray-400">
      A complete full-stack application with modern frontend and backend integration.
    </p>
  </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
