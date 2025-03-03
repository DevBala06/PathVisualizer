import { twMerge } from "tailwind-merge";
import { MAX_COLS, MAX_ROWS } from "../../utils/constants";
import { Tile } from "./Tile";
import { RefObject, useEffect, useState } from "react";
import { checkIfStartOrEnd, createNewGrid } from "../../utils/helpers";
import { usePathfindingStore } from "@/app/hooks/usePathfindingConfig";

export function Grid({
  isVisualizationRunningRef,
  tabId,
}: {
  isVisualizationRunningRef: RefObject<boolean>;
  tabId: string;
}) {
  const { gridConfigs, initializeConfig, setGrid } = usePathfindingStore();
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Initialize config when tabId changes
  useEffect(() => {
    initializeConfig(tabId);
  }, [tabId, initializeConfig]);

  const config = gridConfigs[tabId] || {};
  const grid = config.grid || []; // Ensure grid exists

  const handleMouseDown = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
      return;
    }

    setIsMouseDown(true);
    const newGrid = createNewGrid(grid, row, col);
    setGrid(tabId, newGrid);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
      return;
    }

    if (isMouseDown) {
      const newGrid = createNewGrid(grid, row, col);
      setGrid(tabId, newGrid);
    }
  };

  return (
    <div
      className={twMerge(
        "flex items-center flex-col justify-center border-sky-300 mt-3"
      )}
      style={{
        minHeight: `${MAX_ROWS * 17}px`,
        width: `${MAX_COLS * 17}px`,
      }}
    >
      {grid.map((r, rowIndex) => (
        <div key={rowIndex} className="flex">
          {r.map((tile, tileIndex) => {
            const { row, col, isEnd, isStart, isPath, isTraversed, isWall } = tile;
            return (
              <Tile
                key={tileIndex}
                row={row}
                col={col}
                isEnd={isEnd}
                isStart={isStart}
                isPath={isPath}
                isTraversed={isTraversed}
                isWall={isWall}
                handleMouseDown={() => handleMouseDown(row, col)}
                handleMouseUp={handleMouseUp}
                handleMouseEnter={() => handleMouseEnter(row, col)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
