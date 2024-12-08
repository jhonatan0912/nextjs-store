import { Product } from "@/interfaces/product.interface";

const ProductName = ({ name }: { name: Product["name"] }) => {
  return <p className="text-rose-900 font-semibold">{name}</p>;
};

export default ProductName;
