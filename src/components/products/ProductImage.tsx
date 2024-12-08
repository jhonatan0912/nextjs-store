import { ReactNode } from "react";

interface Props {
  isOnCart: boolean;
  children: ReactNode;
}

const ProductImage = ({ isOnCart, children }: Props) => {
  return (
    <section
      className={`relative border-2 rounded-md ${isOnCart && "border-red"}`}
    >
      {children}
    </section>
  );
};

export default ProductImage;
