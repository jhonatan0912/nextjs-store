import { create } from "zustand";

interface Props {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useModal = create<Props>((set, get) => ({
  isOpen: false,
  open: () => ({ isOpen: true }),
  close: () => ({ isOpen: false }),
}));
