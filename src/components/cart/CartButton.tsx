interface Props {
  onConfirmOrder: () => void;
}

const CartButton = ({ onConfirmOrder }: Props) => {
  const handleClick = () => {
    if (!onConfirmOrder) return;

    onConfirmOrder();
  };

  return (
    <button
      className="bg-red text-white p-2 py-4 rounded-full w-full mt-4 active:scale-95 text-sm font-bold"
      onClick={handleClick}
      aria-label="Confirm Order"
    >
      Confirm Order
    </button>
  );
};

export default CartButton;
