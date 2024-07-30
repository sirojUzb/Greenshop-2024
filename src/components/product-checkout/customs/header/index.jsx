import { Breadcrumb } from "antd";

const CheckoutHeader = () => {
  return (
    <div className="mt-9 ">
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: "Checkout",
          },
        ]}
      />
    </div>
  );
};

export default CheckoutHeader;
