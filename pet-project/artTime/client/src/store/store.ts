import { PointDrawing } from './model/model';
import { create } from 'zustand'

// const useBearStore = create<PointDrawing>((set) => ({
//   point = [];
//   draw: (userId, point) => set((state) => ({ state.points })),
//   removeDraw: () => set({ bears: 0 }),
// }))