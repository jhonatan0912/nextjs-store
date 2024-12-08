import { Product } from "@/interfaces/product.interface";

const ProductPrice = ({ price }: { price: Product["price"] }) => {
  return <div className="text-red font-semibold">${price.toFixed(2)}</div>;
};

export default ProductPrice;
