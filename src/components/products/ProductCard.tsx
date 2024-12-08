"use client";

import { useCartStore } from "@/app/store/cart.store";
import type { Product } from "@/interfaces/product.interface";
import Image from "next/image";
import ProductBody from "./ProductBody";
import ProductButton from "./ProductButton";
import ProductCategory from "./ProductCategory";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";

const ProductCard = ({ product }: { product: Product }) => {
  const { add, items } = useCartStore();

  const isOnCart = items.includes(product);

  const onAddToCart = () => {
    add(product);
  };

  return (
    <section className={`flex flex-col gap-7 rounded-md `}>
      <ProductImage isOnCart={isOnCart}>
        <Image
          className="w-full h-auto rounded-[inherit]"
          width={300}
          height={300}
          src={`/images/${product.images.thumbnail}`}
          alt={product.name}
        />

        <ProductButton
          isOnCart={isOnCart}
          item={product}
          onAddToCart={onAddToCart}
        />
      </ProductImage>

      <ProductBody>
        <ProductCategory type={product.category} />
        <ProductName name={product.name} />
        <ProductPrice price={product.price} />
      </ProductBody>
    </section>
  );
};

export default ProductCard;
