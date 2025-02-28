"use client"

import { FaHome } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import Wall from "@/app/assets/image2.png";
import {
  END_TILE_STYLE,
  MAX_ROWS,
  PATH_TILE_STYLE,
  START_TILE_STYLE,
  TILE_STYLE,
  TRAVERSED_TILE_STYLE,
  WALL_TILE_STYLE,
} from "@/app/utils/constants";
import {  Goal } from "lucide-react";

interface MouseFunction {
  (row: number, col: number): void;
}

export function Tile({
  row,
  col,
  isStart,
  isEnd,
  isTraversed,
  isWall,
  isPath,
  handleMouseDown,
  handleMouseUp,
  handleMouseEnter,
}: {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isTraversed: boolean;
  isWall: boolean;
  isPath: boolean;
  handleMouseDown: MouseFunction;
  handleMouseUp: MouseFunction;
  handleMouseEnter: MouseFunction;
}) {
  let tileStyle;
  let icon = null;

  if (isStart) {
    tileStyle = START_TILE_STYLE;
    icon = <FaHome className="text-white " />;
  } else if (isEnd) {
    tileStyle = END_TILE_STYLE;
    icon = <Goal  className="text-white" />;
  } else if (isWall) {
    tileStyle = WALL_TILE_STYLE;
    icon = (
      <img src={Wall.src} alt="wall-image" className="w-full h-full object-cover" />

    );
    
  } else if (isPath) {
    tileStyle = PATH_TILE_STYLE;
  } else if (isTraversed) {
    tileStyle = TRAVERSED_TILE_STYLE;
  } else {
    tileStyle = TILE_STYLE;
  }

  const borderStyle =
    row === MAX_ROWS - 1 ? "border-b" : col === 0 ? "border-l" : "";
  const edgeStyle = row === MAX_ROWS - 1 && col === 0 ? "border-l" : "";

  return (
    <div
      className={twMerge(tileStyle, borderStyle, edgeStyle, "flex items-center justify-center")}
      id={`${row}-${col}`}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseUp={() => handleMouseUp(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
    >
      {icon}
    </div>
  );
}
