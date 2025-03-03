"use client";

// import { useTabStore } from "@/app/hooks/visualizerStore";
import { Grid } from "@/app/components/VisualizerComponents/Grid";
import { Nav } from "@/app/components/VisualizerComponents/Nav";
import { usePathfinding } from "@/app/hooks/usePathfinding";
// import { PathfindingProvider } from "@/app/context/PathfindingContext";
// import { SpeedProvider } from "@/app/context/SpeedContext";
// import { TileProvider } from "@/app/context/TileContext";
import React from "react";
// import { GridConfig } from "@/app/utils/types";
// import { MAX_COLS, MAX_ROWS } from "@/app/utils/constants";

// const createEmptyGrid = () => {
//   return Array.from({ length: MAX_ROWS }, (_, row) =>
//     Array.from({ length: MAX_COLS }, (_, col) => ({
//       row,
//       col,
//       isEnd: false,
//       isStart: false,
//       isWall: false,
//       isPath: false,
//       distance: Infinity,
//       isTraversed: false,
//       parent: null,
//     }))
//   );
// };

const Visualizer = ({ id }: { id: number }) => {
  const {isVisualizationRunningRef}=usePathfinding();
  // const isVisualizationRunningRef = useRef(false);

 

  

  return (
    <div className="shadow-lg px-2 bg-[#111111]">
      {/* <h2 className="text-white text-lg mb-2">Instance {id}</h2> */}

      
            <div className="flex h-full">
              <div className="flex justify-center items-center w-full">
              <Grid tabId={id.toString()} isVisualizationRunningRef={isVisualizationRunningRef} />

              </div>
              <Nav isVisualizationRunningRef={isVisualizationRunningRef} />
            </div>
        
    </div>
  );
};

export default Visualizer;
