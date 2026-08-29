import { create } from "zustand";
import { PANTRY, type Ingredient } from "@/lib/cook";

interface FridgeState {
  have: Ingredient[];
  toggle: (item: Ingredient) => void;
  reset: () => void;
}

export const useFridgeStore = create<FridgeState>((set, get) => ({
  have: PANTRY,
  toggle: (item) => {
    const have = get().have;
    set({ have: have.includes(item) ? have.filter((entry) => entry !== item) : [...have, item] });
  },
  reset: () => set({ have: PANTRY }),
}));
