"use client"
import React, { useState } from "react";
import { TopBar } from "./TopBar";
import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { Grid } from "./Grid";


interface Algorithm {
  title: string;
  description: string;
  sequence: number;
  href:string;
}

const pathfindingStats = [
  {
    title: "Total Simulations",
    value: "0",
    percentage: "0%",
    description: "from last week",
  },
  {
    title: "Total Time Spent",
    value: "0 min",
    percentage: "0%",
    description: "from last week",
  },
  {
    title: "Completed Simulations",
    value: "0",
    percentage: "0%",
    description: "of total simulations",
  },
];


const algorithms: Algorithm[] = [
  { title: "Dijkstra's Algorithm", description: "Finds the shortest path.", sequence: 1, href:"docs/pathfinding-algorithm/BFS" },
  { title: "A* Search", description: "Uses heuristics for optimal pathfinding.", sequence: 2,href:"docs/pathfinding-algorithm/A_star-algorithm" },
  { title: "Breadth-First Search", description: "Explores all neighbors first.", sequence: 3, href:"docs/pathfinding-algorithm/BFS" },
  { title: "Depth-First Search", description: "Explores deeper paths first.", sequence: 4, href:"docs/pathfinding-algorithm/BFS" },
];

const AlgorithmCard: React.FC<Algorithm> = ({ title, description, sequence,href }) => {

  const router = useRouter();
  return (
    <div className="relative w-[16vw] bg-yellow-300 text-black rounded-2xl p-6 transition-transform duration-300 ease-in-out hover:scale-95 active:scale-90 cursor-pointer" onClick={()=>router.push(href)}>
    <div className="flex flex-col justify-between gap-12 h-full transition-transform duration-300 ease-in-out hover:scale-95">
      <div className="flex gap-12">
        <span className="font-bold text-lg">{sequence.toString().padStart(2, "0")}.</span>
        <p className="font-semibold text-base">{title}</p>
      </div>
      <div className="flex justify-between items-end">
        <p className="font-semibold text-sm  ">{description}</p>
        <svg width={24} height={24} viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
          <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z" />
        </svg>
      </div>
    </div>
  </div>
  );
};

export const Dashboard = () => {
  const MAX_VISIBLE_ALGOS = 3;
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="bg-white transition-all duration-300 rounded-lg pb-4  shadow  sticky top-4  h-[95vh] flex flex-col">
      <TopBar />
      <div className="overflow-auto flex-grow"
      style={{overflowY: "auto",
        scrollbarWidth: "none", /* Firefox */
        msOverflowStyle: "none",} }
      >

      <div className="p-4 bg-white">
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6  max-md:w-full">
    {pathfindingStats.map((stat, index) => (
      <div
        key={index}
        className=" pt-4 max-md:w-[90%] max-md:mx-auto  space-y-2 bg-gray-100 shadow-md p-4 rounded-lg"
      >
        <h1 className="font-semibold text-sm text-gray-700">{stat.title}</h1>
        <h1 className="font-bold text-3xl text-gray-900">{stat.value}</h1>
        <div className="flex gap-x-1 text-sm font-medium">
          <h1 className="bg-[#212121] text-white px-2 rounded-md">{stat.percentage}</h1>
          <h1 className="text-gray-500">{stat.description}</h1>
        </div>
      </div>
    ))}
    <div className="pt-4  space-y-2 bg-[#212121] shadow-md p-4 rounded-lg">
      <h1 className="font-semibold text-sm text-white">Available Simulations</h1>
      <h1 className="font-bold text-3xl text-white">{'∞'}</h1>
      <h1 className="bg-white text-black w-fit px-2 rounded-md text-sm font-medium">
        Free access
      </h1>
    </div>
  </div>
</div>

      <div className="flex gap-2">
      <div className=" mt-2 ml-2 bg-gray-100  shadow w-[70%] h-fit rounded-lg p-2  border relative  border-[#5c5b5b14]">
        <div className="flex justify-between p-1">
        <h1 className="font-semibold text-base text-black">Algorithms</h1>
        {!showAll && algorithms.length > MAX_VISIBLE_ALGOS ? (
          <button
            onClick={() => setShowAll(true)}
            className="text-sm  font-semibold text-neutral-700 px-1 rounded-full border-neutral-600 border bg-neutral-100"
          >
            View All
          </button>)
          :
          (
            <button
            onClick={() => setShowAll(false)}
            className="text-sm  font-semibold text-neutral-700 px-1 rounded-full border-neutral-600 border bg-neutral-100"
          >
            Collapse
          </button>
          )
      }
        </div>
        <div className="relative mt-6 p-2">
      <div className={`grid grid-cols-3 gap-2 overflow-hidden transition-all duration-300 ${showAll ? "max-h-full" : "max-h-[400px]"}`}>
        {algorithms
          .slice(0, showAll ? algorithms.length : MAX_VISIBLE_ALGOS)
          .map((algo) => (
            <AlgorithmCard key={algo.sequence} {...algo} />
          ))}
      </div>
      
    </div>
      </div>
      <div className=" mt-2 m-1 bg-gray-100 shadow w-[30%] h-fit rounded-lg p-2  border relative border-[#5c5b5b14]">

      <h1 className="font-semibold text-base text-black">Visualizer</h1>
      <p className="text-xs mt-2">A Pathfinding Visualizer is an interactive tool that helps visualize how pathfinding algorithms navigate from a starting point to a target in a grid-based environment.</p>
      <div className=" mt-2 p-1">
  <h2 className="font-semibold text-sm text-black">Features</h2>
  <ul className="text-xs text-gray-700 space-y-2 mt-2 w-full">
    <li>🔍 Real-time pathfinding</li>
    <li>⚡ Multiple algorithms</li>
    <li>🛑 Custom obstacles</li>
    <li>🎨 Interactive grid</li>
    <li>📊 Step-by-step visualization</li>
  </ul>
</div>

      <div>
      <button type="button" className="flex mt-2 justify-center gap-2 items-center mx-auto shadow-xl text-sm bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 py-1 overflow-hidden border-2 rounded-full group">
      Explore
      <svg className="w-5 h-5 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-gray-800 group-hover:fill-gray-800" />
      </svg>
    </button>
      </div>

      </div>
      
      </div>
      </div>
      
      {/* <Grid /> */}
    </div>
  );
};
