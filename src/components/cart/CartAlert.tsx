import Image from "next/image";

const CartAlert = () => {
  return (
    <section className="flex gap-1 bg-rose-100 py-4 rounded-md justify-center">
      <Image
        src="/images/icon-check.svg"
        alt="Check Icon"
        width={20}
        height={20}
      />
      <p className="text-sm">
        This is a <span className="font-semibold">carbon-neutral</span> delivery
      </p>
    </section>
  );
};

export default CartAlert;
