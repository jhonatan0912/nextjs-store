const CartAlert = () => {
  return (
    <section className="flex gap-1 bg-rose-100 py-4 rounded-md justify-center">
      <img src="/images/icon-carbon-neutral.svg" alt="Carbon Icon" />
      <p className="text-sm">
        This is a <span className="font-semibold">carbon-neutral</span> delivery
      </p>
    </section>
  );
};

export default CartAlert;
