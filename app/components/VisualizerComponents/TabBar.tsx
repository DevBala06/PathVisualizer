"use client";
import { useTabStore } from "@/app/hooks/visualizerStore";
import React from "react";

const TabBar = () => {
  const { tabs, activeTab, addTab, removeTab, setActiveTab } = useTabStore();

  return (
    <div className="flex bg-gray-900 text-white p-2 space-x-2">
      {/* Tabs */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`flex items-center px-4 py-2 rounded-t-lg cursor-pointer
            ${activeTab === tab.id ? "bg-gray-700" : "bg-gray-800 hover:bg-gray-700"}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <span>{tab.title}</span>
          <button className="ml-2 text-red-400 hover:text-red-600" onClick={() => removeTab(tab.id)}>
            ❌
          </button>
        </div>
      ))}

      {/* Add New Tab Button */}
      <button className="px-4 py-2 bg-blue-500 rounded" onClick={addTab}>
        ➕ New Tab
      </button>
    </div>
  );
};

export default TabBar;
