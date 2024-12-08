import { useModal } from "@/app/store/modal.store";

const OrderConfirmed = () => {
  const { isOpen } = useModal();

  return (
    <div className="modal w-screen h-screen">
      <div className="backdrop"></div>
      <div className="modal-content">
        <h2 className="text-2xl font-bold">Order Confirmed</h2>
        <p className="text-sm">
          Thank you for ordering with us. Your order has been confirmed and will
          be delivered to you shortly.
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmed;
