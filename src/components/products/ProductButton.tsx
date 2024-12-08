"use client";

import { useCartStore } from "@/app/store/cart.store";
import type { Product } from "@/interfaces/product.interface";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface Props {
  item: Product;
  isOnCart: boolean;
  onAddToCart: () => void;
}

const ProductButton = ({ item, isOnCart, onAddToCart }: Props) => {
  const { addQuantity, removeQuantity } = useCartStore();

  const handleClick = () => {
    if (!onAddToCart) return;

    onAddToCart();
  };

  return (
    <section
      onClick={handleClick}
      className="flex gap-3 rounded-full border border-black  absolute -bottom-4 bg-white font-semibold translate-x-[-50%] left-[50%] w-[200px] h-[48px] items-center justify-center cursor-pointer"
      aria-label="Add to Cart"
    >
      {isOnCart ? (
        <section className="flex bg-red text-white rounded-[inherit] justify-between w-full h-full items-center px-3">
          <button
            className="border border-white rounded-full w-5 h-5  flex justify-center items-center"
            onClick={() => removeQuantity(item)}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="border border-white rounded-full w-5 h-5  flex justify-center items-center"
            onClick={() => addQuantity(item)}
          >
            +
          </button>
        </section>
      ) : (
        <>
          <AiOutlineShoppingCart className="text-red text-xl " />
          Add to Cart
        </>
      )}
    </section>
  );
};

export default ProductButton;
