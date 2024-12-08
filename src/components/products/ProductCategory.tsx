import { Product } from "@/interfaces/product.interface";

const ProductCategory = ({ type }: { type: Product["category"] }) => {
  return <div className="text-rose-400 text-sm font-medium">{type}</div>;
};

export default ProductCategory;
