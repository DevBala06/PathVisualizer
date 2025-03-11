import { twMerge } from "tailwind-merge";
import { MAX_COLS, MAX_ROWS } from "../../utils/constants";
import { Tile } from "./Tile";
import { RefObject, useEffect, useState } from "react";
import { createNewGrid, updateStartOrEndTile } from "../../utils/helpers";
import { usePathfindingStore } from "@/app/hooks/usePathfindingConfig";
import axios from "axios";
import { toast } from "react-toastify";


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
    const fetchGridConfig = async () => {
      try {
        const response = await axios.get(`/api/save-grid?tabId=${tabId}`);
          toast.info(
            <div>
              <p className="text-white font-semibold">
                Do you want to load your saved grid?
              </p>
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => {
                    setGrid(tabId, response.data.gridConfig.grid);
                    toast.success("✅ Grid loaded successfully!");
                  }}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Yes, Load Grid
                </button>
    
                <button
                  onClick={() => toast.info("❌ Grid not loaded.")}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  No, Keep Current Grid
                </button>
              </div>
            </div>,
            {
              position: "top-center",
              autoClose: false,
              closeOnClick: false,
              draggable: false,
            }
          );
console.log(response.data)
      } catch (error) {
        console.error("Failed to fetch grid config", error);
      }
    };
    fetchGridConfig();

    initializeConfig(tabId);
  }, [tabId, initializeConfig]);

  // const loadGridConfig = (gridConfig: any) => {
  //   setGrid(tabId, gridConfig.grid);
  //   setStartTile(tabId, gridConfig.startTile);
  //   setEndTile(tabId, gridConfig.endTile);

  //   toast.success("✅ Grid Loaded Successfully!", {
  //   });
  // };

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


