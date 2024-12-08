"use client";
import { useCartStore } from "@/app/store/cart.store";
import CartEmptyState from "./CartEmptyState";
import CartSelected from "./CartSelected";

const CartBody = () => {
  const { items } = useCartStore();

  return (
    <section className="flex flex-col gap-2">
      {items.length === 0 ? <CartEmptyState /> : <CartSelected items={items}/>}
    </section>
  );
};

export default CartBody;
