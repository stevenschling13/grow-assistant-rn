import { create } from 'zustand';

/**
 * Defines the shape of the global application state. Plants, tasks and
 * environmental readings are stored here and can be accessed from any
 * component via the useStore hook. Zustand provides a simple and
 * lightweight state management solution without the boilerplate of
 * Redux.
 */
export interface Plant {
  id: string;
  name: string;
  strain?: string;
  stage: 'seedling' | 'veg' | 'flower' | 'harvest';
  notes?: string;
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate: string;
}

export interface EnvReading {
  timestamp: string;
  vpd: number;
  ppfd: number;
  temperature: number;
  humidity: number;
}

interface StoreState {
  plants: Plant[];
  tasks: Task[];
  envReadings: EnvReading[];
  addPlant: (plant: Plant) => void;
  updatePlant: (plant: Plant) => void;
  addTask: (task: Task) => void;
  toggleTask: (id: string) => void;
  addEnvReading: (reading: EnvReading) => void;
}

export const useStore = create<StoreState>((set) => ({
  plants: [],
  tasks: [],
  envReadings: [],
  addPlant: (plant) => set((state) => ({ plants: [...state.plants, plant] })),
  updatePlant: (plant) =>
    set((state) => ({
      plants: state.plants.map((p) => (p.id === plant.id ? plant : p)),
    })),
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    })),
  addEnvReading: (reading) =>
    set((state) => ({ envReadings: [...state.envReadings, reading] })),
}));
