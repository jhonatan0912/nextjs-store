"use client";
import { useCartStore } from "@/app/store/cart.store";
import CartBody from "./CartBody";

const Cart = () => {
  const count = useCartStore((state) => state.count());

  return (
    <section className="h-max shadow-md p-5 rounded-md bg-white flex-1 max-w-[400px]">
      <h3 className="pb-5 font-bold text-2xl text-red">Your Cart ({count})</h3>

      <CartBody />
    </section>
  );
};

export default Cart;
