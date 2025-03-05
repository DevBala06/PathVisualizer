import {
  EXTENDED_SLEEP_TIME,
  PATH_TILE_STYLE,
  SLEEP_TIME,
  SPEEDS,
  TRAVERSED_TILE_STYLE,
} from "./constants";
import { isEqual } from "./helpers";
import { SpeedType, TileType } from "./types";

export const animatePath = (
  traversedTiles: TileType[],
  path: TileType[],
  startNode: TileType,
  endNode: TileType,
  speed: SpeedType
) => {
  // Extract the speed factor, fallback to 1 if not found
  const speedObj = SPEEDS.find((s) => s.value === speed);
  const speedFactor = speedObj ? speedObj.value : 1;

  // Animate traversal of tiles
  for (let i = 0; i < traversedTiles.length; i++) {
    setTimeout(() => {
      const tile = traversedTiles[i];
      if (!isEqual(tile, startNode) && !isEqual(tile, endNode)) {
        const element = document.getElementById(`${tile.row}-${tile.col}`);
        if (element) {
          element.className = `${TRAVERSED_TILE_STYLE} animate-traversed`;
        }
      }
    }, SLEEP_TIME * i * speedFactor);
  }

  // After traversing, animate the final path
  setTimeout(() => {
    for (let i = 0; i < path.length; i++) {
      setTimeout(() => {
        const tile = path[i];
        if (!isEqual(tile, startNode) && !isEqual(tile, endNode)) {
          const element = document.getElementById(`${tile.row}-${tile.col}`);
          if (element) {
            element.className = `${PATH_TILE_STYLE} animate-path`;
          }
        }
      }, EXTENDED_SLEEP_TIME * i * speedFactor);
    }
  }, SLEEP_TIME * traversedTiles.length * speedFactor);
};
