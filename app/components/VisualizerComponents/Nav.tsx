import { RefObject, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathfinding } from "@/app/hooks/usePathfinding";
import { useTile } from "@/app/hooks/useTile";
import {
  EXTENDED_SLEEP_TIME,
  MAZES,
  PATHFINDING_ALGORITHMS,
  SLEEP_TIME,
  SPEEDS,
} from "@/app/utils/constants";
import { resetGrid } from "@/app/utils/resetGrid";
import { AlgorithmType, MazeType, SpeedType } from "@/app/utils/types";
import { Select } from "./Select";
import { useSpeed } from "@/app/hooks/useSpeed";
import { runMazeAlgorithm } from "@/app/utils/runMazeAlgorithm";
import { PlayButton } from "./PlayButton";
import { runPathfindingAlgorithm } from "@/app/utils/runPathfindingAlgorithm";
import { animatePath } from "@/app/utils/animatePath";
import { X } from "lucide-react"; // Close icon

export function Nav({
  isVisualizationRunningRef,
}: {
  isVisualizationRunningRef: RefObject<boolean>;
}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const{isOpen, setIsOpen} = usePathfinding();
  

  useEffect(() => {
    console.log("State changed:", isOpen);
  }, [isOpen]);
  
  const {
    maze,
    setMaze,
    grid,
    setGrid,
    isGraphVisualized,
    setIsGraphVisualized,
    algorithm,
    setAlgorithm,
  } = usePathfinding();
  const { startTile, endTile } = useTile();
  const { speed, setSpeed } = useSpeed();

  const handleGenerateMaze = (maze: MazeType) => {
    if (maze === "NONE") {
      setMaze(maze);
      resetGrid({ grid, startTile, endTile });
      return;
    }
    setMaze(maze);
    setIsDisabled(true);
    runMazeAlgorithm({ maze, grid, startTile, endTile, setIsDisabled, speed });
    setGrid(grid.slice());
    setIsGraphVisualized(false);
  };

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
    <>

      {/* Overlay Background */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )} */}

      {/* Sliding Panel */}
      {isOpen && (
  <motion.div
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ type: "spring", stiffness: 150, damping: 20 }}
    className="fixed right-0 top-10 h-[80%] w-80 bg-white/10 dark:bg-black/20 text-white shadow-lg z-50 rounded-md backdrop-blur-md backdrop-saturate-150 border border-white/10 dark:border-neutral-700"
  >
    {/* Header */}
    <div className="flex items-center justify-between px-4 py-3 border-b border-white/20 dark:border-neutral-700">
      <h2 className="text-lg font-medium">Settings</h2>
      <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-neutral-200">
        <X size={20} />
      </button>
    </div>

    {/* Content */}
    <div className="p-4 flex flex-col space-y-4">
      <Select
        label="Maze"
        value={maze}
        options={MAZES}
        isDisabled={isDisabled}
        onChange={(e) => handleGenerateMaze(e.target.value as MazeType)}
      />
      <Select
        label="Graph"
        value={algorithm}
        isDisabled={isDisabled}
        options={PATHFINDING_ALGORITHMS}
        onChange={(e) => setAlgorithm(e.target.value as AlgorithmType)}
      />
      <Select
        label="Speed"
        value={speed}
        options={SPEEDS}
        isDisabled={isDisabled}
        onChange={(e) => setSpeed(parseInt(e.target.value) as SpeedType)}
      />
      <PlayButton
        isDisabled={isDisabled}
        isGraphVisualized={isGraphVisualized}
        handlerRunVisualizer={handlerRunVisualizer}
        buttonText="Start Simulation"
        className="bg-green-600 text-white font-semibold  p-2"
      />
    </div>
  </motion.div>
)}


     
    </>
  );
}
