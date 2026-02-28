import { create } from "zustand";

interface BagState {
    items: number;
    setItems: (item: number) => void;
};

export const useBagStore = create<BagState>()((set) => ({
    items: 0,
    setItems: (item) => set(() => ({ items: item })),
}))