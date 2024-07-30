import BillingAddress from "./customs/billing-address";
import CheckoutHeader from "./customs/header";
import Order from "./customs/order";
import ConfirmModal from "./modals/confirm-modals";

const ProductCheckout = () => {
  return (
    <div className="w-[80%] m-auto">
      <ConfirmModal />
      <CheckoutHeader />
      <div className="mt-[30px] mb-[30px] flex justify-between gap-9 max-md:flex-col">
        <BillingAddress />
        <Order />
      </div>
    </div>
  );
};

export default ProductCheckout;
