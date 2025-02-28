import { create } from "zustand";
import { AlgorithmType, GridType, MazeType } from "../utils/types";
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
}

interface PathfindingState {
  gridConfigs: Record<string, GridConfig>; // Stores grid settings per instance
  setAlgorithm: (tabId: string, algorithm: AlgorithmType) => void;
  setMaze: (tabId: string, maze: MazeType) => void;
  setGrid: (tabId: string, grid: GridType) => void;
  setIsGraphVisualized: (tabId: string, isGraphVisualized: boolean) => void;
  initializeConfig: (tabId: string) => void;
}

export const usePathfindingStore = create<PathfindingState>((set) => ({
  gridConfigs: {}, // Holds multiple configs

  initializeConfig: (tabId) => {
    set((state) => ({
      gridConfigs: {
        ...state.gridConfigs,
        [tabId]: state.gridConfigs[tabId] || {
          algorithm: "BFS",
          maze: "NONE",
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
}));
