"use client";
import { useCartStore } from "@/app/store/cart.store";
import type { Product } from "@/interfaces/product.interface";

interface Props {
  item: Product;
}

const CartProduct = ({ item }: Props) => {
  const { remove } = useCartStore();

  return (
    <section className="flex border-b border-rose-100 pb-2 items-center">
      <div className="flex flex-1 flex-col">
        <p className="font-semibold">{item.name}</p>{" "}
        <p className="text-sm">
          <span className="text-red">{item.quantity}x</span>{" "}
          <span>
            @ ${item.price.toFixed(2)} $
            {(item.price * item.quantity).toFixed(2)}
          </span>
        </p>
      </div>

      <button
        className="w-5 h-5 rounded-full border border-rose-300 flex justify-center items-center text-rose-300 font-semibold"
        onClick={() => remove(item)}
      >
        x
      </button>
    </section>
  );
};

export default CartProduct;
