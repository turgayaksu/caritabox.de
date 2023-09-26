import { create } from "zustand";

type MenuStore = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

const useMenu = create<MenuStore>((set) => ({
  isOpen: false,
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
  onClose: () => set({ isOpen: false }),
}));

export default useMenu;
