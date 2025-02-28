"use client";
import { useTabStore } from "@/app/hooks/visualizerStore";
import VisualizerInstance from "@/app/components/VisualizerComponents/VisualizerInstance";
import TabBar from "@/app/components/VisualizerComponents/TabBar";
import React from "react";

const Visualizer = () => {
  const { tabs, activeTab } = useTabStore();

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-950 text-white">
      {/* Chrome-Like Tab Bar */}
      <TabBar />

      {/* Active Visualizer Instance */}
      <div className="p-4 flex-1">
        {tabs.map((tab) =>
          tab.id === activeTab ? <VisualizerInstance key={tab.id} id={tab.id} /> : null
        )}
      </div>
    </div>
  );
};

export default Visualizer;
