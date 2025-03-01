import HomeVisualizer from '@/app/components/VisualizerComponents/HomeVisualizer';
import React from 'react'

const VisualizerDashboard = () => {
  return (
    <div className="grid grid-cols-1 bg-[#F5F7F9] min-h-screen">
  <div className="bg-white rounded-lg sticky top-4 shadow h-[95vh] flex flex-col">
    {/* Header (Non-Scrollable) */}
    <div className="border-b border-stone-200 p-3">
      <h1 className="font-bold">Visualizer Overview</h1>
      <h3 className='font-semibold text-xs'>{`${'"'}Experiment with Scenarios. Compare Outcomes.${'"'}`}</h3>
    </div>

    {/* Scrollable Content */}
    <div className="p-5 overflow-auto flex-grow"
    style={{overflowY: "auto",
      scrollbarWidth: "none", /* Firefox */
      msOverflowStyle: "none",} }
    >
      <HomeVisualizer/>
    </div>
  </div>
</div>
  )
}

export default VisualizerDashboard;