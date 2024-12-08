import { Product } from "@/interfaces/product.interface";
import CartProduct from "./CartProduct";
import CartSummary from "./CartSummary";
import CartAlert from "./CartAlert";
import CartButton from "./CartButton";

interface Props {
  items: Product[];
}

const CartSelected = ({ items }: Props) => {
  const onConfirmOrder = () => {
    console.log("Order confirmed");
  };

  return (
    <section className="grid gap-3">
      {items.map((item) => (
        <CartProduct key={crypto.randomUUID()} item={item} />
      ))}

      <CartSummary />

      <CartAlert />
      <CartButton onConfirmOrder={onConfirmOrder} />
    </section>
  );
};

export default CartSelected;
