import { create } from "zustand";

export const useViewModal = create((set) => ({
  data: [],
  active: false,
  setModalData: (payload) => set(() => ({ data: [...payload] })),
  setActive: (payload) => set(() => ({ active: payload })),
}));
