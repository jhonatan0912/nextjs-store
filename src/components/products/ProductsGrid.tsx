import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProductsGrid = ({ children }: Props) => {
  return (
    <section className="grid grid-cols-[repeat(auto,minmax(250px,1fr))] gap-4 desktop:grid-cols-3">
      {children}
    </section>
  );
};

export default ProductsGrid;
