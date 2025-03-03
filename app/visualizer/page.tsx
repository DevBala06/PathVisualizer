"use client";
import { useTabStore } from "@/app/hooks/visualizerStore";
import VisualizerInstance from "@/app/components/VisualizerComponents/VisualizerInstance";
import TabBar from "@/app/components/VisualizerComponents/TabBar";
import React, { ReactElement, useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { Plus } from "lucide-react";
import { CiSettings } from "react-icons/ci";
import { usePathfinding } from "../hooks/usePathfinding";
import { animatePath } from "../utils/animatePath";
import { useTile } from "../hooks/useTile";
import { useSpeed } from "../hooks/useSpeed";
import { runPathfindingAlgorithm } from "../utils/runPathfindingAlgorithm";
import { resetGrid } from "../utils/resetGrid";
import { EXTENDED_SLEEP_TIME, SLEEP_TIME, SPEEDS } from "../utils/constants";
import { PlayButton } from "../components/VisualizerComponents/PlayButton";
import { FaHome } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Card = ({ children }:{
  children:ReactElement;
}) => {

    const {  addTab } = useTabStore();
      const [isDisabled, setIsDisabled] = useState(false);
    
    const{isOpen, setIsOpen,algorithm,
      grid,
      setGrid,
      isGraphVisualized,
      setIsGraphVisualized,
      isVisualizationRunningRef,
      } = usePathfinding();

const router = useRouter();

      const { startTile, endTile } = useTile();
        const { speed } = useSpeed();
    const handlerRunVisualizer = () => {
        if (isGraphVisualized) {
          setIsGraphVisualized(false);
          resetGrid({ grid: grid.slice(), startTile, endTile });
          return;
        }
    
        const { traversedTiles, path } = runPathfindingAlgorithm({
          algorithm,
          grid,
          startTile,
          endTile,
        });
    
        animatePath(traversedTiles, path, startTile, endTile, speed);
        setIsDisabled(true);
        isVisualizationRunningRef.current = true;
        setTimeout(() => {
          setGrid(grid.slice());
          setIsGraphVisualized(true);
          setIsDisabled(false);
          isVisualizationRunningRef.current = false;
        }, 
          SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) + 
          EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed)!.value
        );
      };
  
  return (
    <div className="grid grid-cols-1  min-h-screen">
    <div className=" sticky top-4 shadow flex flex-col">
      {/* Header (Non-Scrollable) */}
    
    <div className="w-screen h-screen bg-[#141414]  flex flex-col  ">
    {/* Circles (Close, Minimize, Maximize) */}
  
    <div className="flex w-full items-center justify-between border-b border-gray-700 px-3 py-1 gap-2">
      <div className="flex gap-1 items-center ">
      <div className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-inner cursor-pointer" onClick={()=>router.push("/dashboard/visualizer")}></div>
      <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full shadow-inner cursor-pointer"></div>
      <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-inner cursor-pointer"></div>
    <div className="flex items-center px-3 py-2 gap-3 ">
      <div className="flex space-x-2">
        <svg viewBox="0 0 20 20" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
          <path transform="translate(6.25 3.75)" d="M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z" fill="white" />
        </svg>
        <svg viewBox="0 0 20 20" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
          <path transform="translate(6.625 3.75)" d="M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z" fill="white" />
        </svg>
      </div>

      {/* Search Bar */}
    </div>
      </div>
     <div className="relative flex  items-center border border-zinc-600 rounded-md  px-52 py-1 text-sm text-gray-300  ">
        <span className="pl-6 flex gap-1 items-baseline text-sm font-semibold"><FaLock />pathvisualizer.io</span>
        <IoMdRefresh className="absolute right-2" />
        <FaHome className="absolute left-2" onClick={()=>router.push("/dashboard/visualizer")}/>
      </div>
      <div className="flex items-center gap-1">
      <PlayButton
            isDisabled={isDisabled}
            isGraphVisualized={isGraphVisualized}
            handlerRunVisualizer={handlerRunVisualizer}
            
          />
      <button className="text-neutral-300 hover:text-neutral-100 hover:bg-[#a1a1aa65] hover:rounded-full" onClick={addTab}>
        <Plus className="scale-75"/> 
      </button>
      <CiSettings onClick={() => {
    setIsOpen(!isOpen);
    console.log("isOpen state:", isOpen);
  }} className="text-lg cursor-pointer text-white"/>
    
      </div>
    </div>

    {/* Browser Navigation */}

    {/* Content Section */}
    <div className=" overflow-auto flex-grow"
    style={{overflowY: "auto",
      scrollbarWidth: "none", /* Firefox */
      msOverflowStyle: "none",} }>

    <div className="flex-1">{children}</div>
    </div>
  </div>
  </div>
  </div>
  );
};

const Visualizer = () => {
  const { tabs, activeTab } = useTabStore();

  return (
    <Card>
      <div className="h-full w-full flex flex-col bg-[#191919] text-white">
        {/* Chrome-Like Tab Bar */}
        <TabBar />

        {/* Active Visualizer Instance */}
        <div className="bg-[#4a4b4b6c] flex-1">
          {tabs.map((tab) =>
            tab.id === activeTab ? <VisualizerInstance key={tab.id} id={tab.id} /> : null
          )}
        </div>
        {/* <div className="w-1/2 bg-white">
        <iframe className="w-full h-screen"
          src={'http://localhost:3000/docs/pathfinding-algorithm/BFS'}/>
        </div> */}
      </div>
    </Card>
  );
};

export default Visualizer;
