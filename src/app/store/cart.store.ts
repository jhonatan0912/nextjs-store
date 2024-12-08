import { Product } from "@/interfaces/product.interface";
import { create } from "zustand";

export interface CartState {
  items: Product[];
  count: () => number;
  total: () => number;
  add: (product: Product) => void;
  remove: (product: Product) => void;
  addQuantity: (product: Product) => void;
  removeQuantity: (product: Product) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  count: () => get().items.length,
  total: () =>
    get().items.reduce((acc, item) => (acc += item.price * item.quantity), 0),
  add: (product: Product) =>
    set((state: any) => {
      if (state.items.includes(product)) return state;
      product.quantity += 1;

      return {
        items: [product, ...state.items],
      };
    }),
  addQuantity: (product: Product) =>
    set((state: any) => {
      product.quantity += 1;
      return {
        items: state.items,
      };
    }),
  removeQuantity: (product: Product) =>
    set((state: any) => {
      if (product.quantity === 1) return state;

      product.quantity -= 1;
      return {
        items: state.items,
      };
    }),
  remove: (product: Product) =>
    set((state: any) => {
      product.quantity = 0;
      return {
        items: state.items.filter((item: Product) => item !== product),
      };
    }),
}));
