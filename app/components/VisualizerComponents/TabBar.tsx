"use client";
import { useTabStore } from "@/app/hooks/visualizerStore";
import { Minus, Plus } from "lucide-react";
import React from "react";

const TabBar = () => {
  const { tabs, activeTab, addTab, removeTab, setActiveTab } = useTabStore();

  return (
    <div className="flex bg-transparent  items-center  text-white ml-2 mt-2 ">
      {/* Tabs */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`flex gap-2 items-center px-2 py-1 rounded-t-lg cursor-pointer
            ${activeTab === tab.id ? "bg-[#4a4b4b6c] hover:bg-gray-700" : ""}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <span className="text-sm text-neutral-200">{tab.title}</span>
          <button className=" text-neutral-300 rotate-45  hover:text-neutral-100  hover:bg-[#a1a1aa65] hover:rounded-full" onClick={() => removeTab(tab.id)}>
          <Plus className="scale-75"/>
          </button>
        </div>
      ))}
        <Minus className="rotate-90 text-neutral-600" />
      {/* Add New Tab Button */}
      <button className="text-neutral-300 hover:text-neutral-100 hover:bg-[#a1a1aa65] hover:rounded-full" onClick={addTab}>
        <Plus className="scale-75"/> 
      </button>
    </div>
  );
};

export default TabBar;
