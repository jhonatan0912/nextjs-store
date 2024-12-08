"use client";

import { useCartStore } from "@/app/store/cart.store";

const CartSummary = () => {
  const total: number = useCartStore((state) => state.total());

  return (
    <div className="flex justify-between items-center">
      <span className="text-sm">Order Total</span>
      <span className="text-2xl font-semibold">${total.toFixed(2)}</span>
    </div>
  );
};

export default CartSummary;
