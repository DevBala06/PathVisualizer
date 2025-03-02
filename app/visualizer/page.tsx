"use client";
import { useTabStore } from "@/app/hooks/visualizerStore";
import VisualizerInstance from "@/app/components/VisualizerComponents/VisualizerInstance";
import TabBar from "@/app/components/VisualizerComponents/TabBar";
import React, { ReactElement } from "react";
import { IoMdRefresh } from "react-icons/io";
import { FaLock } from "react-icons/fa6";

const Card = ({ children }:{
  children:ReactElement;
}) => {
  return (
    <div className="w-screen h-screen bg-[#141414] overflow-hidden flex flex-col  ">
    {/* Circles (Close, Minimize, Maximize) */}
    <div className="flex w-full items-center border-b border-gray-700 px-3 py-1 gap-2">
      <div className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-inner"></div>
      <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full shadow-inner"></div>
      <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-inner"></div>
    <div className="flex items-center  px-3 py-2 gap-3 ">
      <div className="flex space-x-2">
        <svg viewBox="0 0 20 20" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
          <path transform="translate(6.25 3.75)" d="M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z" fill="white" />
        </svg>
        <svg viewBox="0 0 20 20" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
          <path transform="translate(6.625 3.75)" d="M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z" fill="white" />
        </svg>
      </div>

      {/* Search Bar */}
      <div className="relative flex ml-40  items-center border border-zinc-600 rounded-md  px-52 py-1 text-sm text-gray-300 w-full ">
        <span className="pl-6 flex gap-1 items-baseline text-sm font-semibold"><FaLock />pathvisualizer.io</span>
        <IoMdRefresh className="absolute right-2" />
      </div>
    </div>
    </div>

    {/* Browser Navigation */}

    {/* Content Section */}
    <div className="flex-1">{children}</div>
  </div>
  );
};

const Visualizer = () => {
  const { tabs, activeTab } = useTabStore();

  return (
    <Card>
      <div className="h-screen w-screen flex flex-col bg-[#191919] text-white">
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
