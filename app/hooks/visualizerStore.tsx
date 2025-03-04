import { create } from "zustand";
import { GridType } from "../utils/types";

interface GridConfig {
  tiles: GridType;
  startNode: { row: number; col: number };
  endNode: { row: number; col: number };
}

interface Tab {
  id: number;
  title: string;
  gridConfig: GridConfig;
}

interface TabStore {
  tabs: Tab[];
  activeTab: number;
  addTab: () => void;
  removeTab: (id: number) => void;
  setActiveTab: (id: number) => void;
  updateGridForInstance: (grid: GridType) => void;
  getCurrentTab: () => Tab | undefined;
}

export const useTabStore = create<TabStore>((set, get) => ({
  
  tabs: [
    {
      id: 1,
      title: "Visualizer 1",
      gridConfig: { tiles: [], startNode: { row: 0, col: 0 }, endNode: { row: 0, col: 0 } },
    },
  ],
  activeTab: 1,

  addTab: () =>
    set((state) => {
      const newId = state.activeTab+1;
      return {
        tabs: [
          ...state.tabs,
          {
            id: newId,
            title: `Visualizer ${state.tabs.length + 1}`,
            gridConfig: { tiles: [], startNode: { row: 0, col: 0 }, endNode: { row: 0, col: 0 } },
          },
        ],
        activeTab: newId,
      };
    }),

    removeTab: (id) =>
      set((state: TabStore) => {
        const newTabs = state.tabs.filter((tab) => tab.id !== id);
        console.log(newTabs)
        let newActiveTab = state.activeTab;
        console.log(newActiveTab)
        if (state.activeTab === id) {
          newActiveTab = newTabs.length > 0 ? newTabs[0].id : 0; // or null if you prefer
        } 
        return { tabs: newTabs, activeTab: 1 };
      }),
    
    
    
    
    

  setActiveTab: (id) => set({ activeTab: id }),

  updateGridForInstance: (grid) =>
    set((state) => ({
      tabs: state.tabs.map((tab) =>
        tab.id === state.activeTab ? { ...tab, gridConfig: { ...tab.gridConfig, tiles: grid } } : tab
      ),
    })),

  getCurrentTab: () => get().tabs.find((tab) => tab.id === get().activeTab),
}));
