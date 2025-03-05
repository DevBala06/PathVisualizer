import { RefObject,  useState } from "react";
import { motion } from "framer-motion";
import { usePathfinding } from "@/app/hooks/usePathfinding";
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
import { X } from "lucide-react";
import { usePathfindingStore } from "@/app/hooks/usePathfindingConfig";

export function Nav({
  isVisualizationRunningRef,
  tabId,
}: {
  isVisualizationRunningRef: RefObject<boolean>;
  tabId: string;
}) {
  // Call all hooks unconditionally at the top.
  const [isDisabled, setIsDisabled] = useState(false);
  const { isOpen, setIsOpen } = usePathfinding();
  const { speed, setSpeed } = useSpeed();
  const { gridConfigs, setMaze, setGrid, setIsGraphVisualized, setAlgorithm } = usePathfindingStore();

  const config = gridConfigs[tabId];
console.log(config)
  if (!config) return <div>Loading...</div>;

  // Destructure the necessary properties from the config.
  const { algorithm, grid, isGraphVisualized, maze, startTile, endTile } = config;
  console.log(startTile);

  const handleGenerateMaze = (maze: MazeType) => {
    if (maze === "NONE") {
      setMaze(tabId, maze);
      resetGrid({ grid, startTile, endTile });
      return;
    }
    setMaze(tabId, maze);
    setIsDisabled(true);
    console.log(speed)
    runMazeAlgorithm({ maze, grid, startTile, endTile, setIsDisabled, speed });
    setGrid(tabId, grid.slice());
    setIsGraphVisualized(tabId, false);
  };

  const handlerRunVisualizer = () => {
    if (isGraphVisualized) {
      setIsGraphVisualized(tabId, false);
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
      setGrid(tabId, grid.slice());
      setIsGraphVisualized(tabId, true);
      setIsDisabled(false);
      isVisualizationRunningRef.current = false;
    },
      SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) +
      EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed)!.value
    );
  };

  return (
    <>
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
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-neutral-200"
            >
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
              onChange={(e) =>
                setAlgorithm(tabId, e.target.value as AlgorithmType)
              }
            />
            <Select
              label="Speed"
              value={speed}
              options={SPEEDS}
              isDisabled={isDisabled}
              onChange={(e) =>
                setSpeed(parseInt(e.target.value) as SpeedType)
              }
            />
            <PlayButton
              isDisabled={isDisabled}
              isGraphVisualized={isGraphVisualized}
              handlerRunVisualizer={handlerRunVisualizer}
              buttonText="Start Simulation"
              className="bg-green-600 text-white font-semibold p-2"
            />
          </div>
        </motion.div>
      )}
    </>
  );
}
