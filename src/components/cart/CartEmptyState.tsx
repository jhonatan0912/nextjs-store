import Image from "next/image";

const CartEmptyState = () => {
  return (
    <section className="flex justify-center flex-col items-center">
      <Image
        width={300}
        height={300}
        src={"/images/illustration-empty-cart.svg"}
        alt="Empty Cart"
      />

      <p className="text-rose-400 text-center font-medium">
        Your added items will appear here
      </p>
    </section>
  );
};

export default CartEmptyState;
