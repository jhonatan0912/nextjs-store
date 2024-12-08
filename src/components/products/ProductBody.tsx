import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const ProductBody = ({ children }: Props) => {
  return <section className="flex flex-col">{children}</section>;
};

export default ProductBody;
