import { Breadcrumb } from "antd";

const ShoppingHeader = () => {
  return (
    <div className="mt-9 ">
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: "Shopping Card",
          },
        ]}
      />
    </div>
  );
};

export default ShoppingHeader;
