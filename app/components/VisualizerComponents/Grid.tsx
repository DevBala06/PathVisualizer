import { twMerge } from "tailwind-merge";
import { MAX_COLS, MAX_ROWS } from "../../utils/constants";
import { Tile } from "./Tile";
import { RefObject, useEffect, useState } from "react";
import { createNewGrid, updateStartOrEndTile } from "../../utils/helpers";
import { usePathfindingStore } from "@/app/hooks/usePathfindingConfig";

export function Grid({
  isVisualizationRunningRef,
  tabId,
}: {
  isVisualizationRunningRef: RefObject<boolean>;
  tabId: string;
}) {
  const {
    gridConfigs,
    initializeConfig,
    setGrid,
    setStartTile,
    setEndTile,
  } = usePathfindingStore();
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isDraggingStart, setIsDraggingStart] = useState(false);
  const [isDraggingEnd, setIsDraggingEnd] = useState(false);

  useEffect(() => {
    initializeConfig(tabId);
  }, [tabId, initializeConfig]);

  const config = gridConfigs[tabId] || {};
  const grid = config.grid || [];

  const handleMouseDown = (
    row: number,
    col: number,
    isStart: boolean,
    isEnd: boolean
  ) => {
    if (isVisualizationRunningRef.current) return;

    if (isStart) {
      setIsDraggingStart(true);
    } else if (isEnd) {
      setIsDraggingEnd(true);
    } else {
      setIsMouseDown(true);
      const newGrid = createNewGrid(grid, row, col);
      setGrid(tabId, newGrid);
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    setIsDraggingStart(false);
    setIsDraggingEnd(false);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (isVisualizationRunningRef.current) return;

    if (isDraggingStart || isDraggingEnd) {
      const newGrid = updateStartOrEndTile(
        grid,
        row,
        col,
        isDraggingStart,
        isDraggingEnd
      );
      setGrid(tabId, newGrid);
      // Merge the new coordinates with the current tile data to form a complete TileType
      if (isDraggingStart) {
        setStartTile(tabId, { ...config.startTile, row, col });
      } else if (isDraggingEnd) {
        setEndTile(tabId, { ...config.endTile, row, col });
      }
    } else if (isMouseDown) {
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
            const { row, col, isEnd, isStart, isPath, isTraversed, isWall } =
              tile;
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
                handleMouseDown={() =>
                  handleMouseDown(row, col, isStart, isEnd)
                }
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
