import { create } from "zustand";
import { AlgorithmType, GridType, MazeType, TileType } from "../utils/types";
import { createGrid } from "../utils/helpers";
import {
  END_TILE_CONFIGURATION,
  START_TILE_CONFIGURATION,
} from "../utils/constants";

interface GridConfig {
  algorithm: AlgorithmType;
  maze: MazeType;
  grid: GridType;
  isGraphVisualized: boolean;
  startTile: TileType;
  endTile: TileType;
}

interface PathfindingState {
  gridConfigs: Record<string, GridConfig>; // Stores grid settings per instance
  initializeConfig: (tabId: string) => void;
  setAlgorithm: (tabId: string, algorithm: AlgorithmType) => void;
  setMaze: (tabId: string, maze: MazeType) => void;
  setGrid: (tabId: string, grid: GridType) => void;
  setIsGraphVisualized: (tabId: string, isGraphVisualized: boolean) => void;
  setStartTile: (tabId: string, startTile: TileType) => void;
  getStartAndEndTile: (tabId: string) => { startTile: TileType ; endTile: TileType  };
  setEndTile: (tabId: string, endTile: TileType) => void;
}

export const usePathfindingStore = create<PathfindingState>((set, get) => ({
  gridConfigs: {},

  initializeConfig: (tabId) => {
    set((state) => ({
      gridConfigs: {
        ...state.gridConfigs,
        [tabId]: state.gridConfigs[tabId] || {
          algorithm: "BFS",
          maze: "NONE",
          startTile: { ...START_TILE_CONFIGURATION },
          endTile: { ...END_TILE_CONFIGURATION },
          grid: createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION),
          isGraphVisualized: false,
        },
      },
    }));
  },

  setAlgorithm: (tabId, algorithm) =>
    set((state) => ({
      gridConfigs: {
        ...state.gridConfigs,
        [tabId]: { ...state.gridConfigs[tabId], algorithm },
      },
    })),

  setMaze: (tabId, maze) =>
    set((state) => ({
      gridConfigs: {
        ...state.gridConfigs,
        [tabId]: { ...state.gridConfigs[tabId], maze },
      },
    })),

  setGrid: (tabId, grid) =>
    set((state) => ({
      gridConfigs: {
        ...state.gridConfigs,
        [tabId]: { ...state.gridConfigs[tabId], grid },
      },
    })),

  setIsGraphVisualized: (tabId, isGraphVisualized) =>
    set((state) => ({
      gridConfigs: {
        ...state.gridConfigs,
        [tabId]: { ...state.gridConfigs[tabId], isGraphVisualized },
      },
    })),

  setStartTile: (tabId, startTile) =>
    set((state) => {
      const updatedConfig = {
        ...state.gridConfigs[tabId],
        startTile,
        grid: createGrid(startTile, state.gridConfigs[tabId].endTile),
      };
      return {
        gridConfigs: { ...state.gridConfigs, [tabId]: updatedConfig },
      };
    }),

  setEndTile: (tabId, endTile) =>
    set((state) => {
      const updatedConfig = {
        ...state.gridConfigs[tabId],
        endTile,
        grid: createGrid(state.gridConfigs[tabId].startTile, endTile),
      };
      return {
        gridConfigs: { ...state.gridConfigs, [tabId]: updatedConfig },
      };
    }),

    getStartAndEndTile: (tabId) => {
      const state = get(); // Always fetch the latest state
      const config = state.gridConfigs[tabId] || {};
      return {
        startTile: config.startTile,
        endTile: config.endTile,
      };
    },
}));

