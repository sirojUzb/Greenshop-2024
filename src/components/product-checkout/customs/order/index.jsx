import { Descriptions } from "antd";
import { useShoppingService } from "../../../../service/shopping";
import OrderCard from "./customs/orderCard";

const Order = () => {
  const { products, coupon } = useShoppingService();

  const total = products?.reduce((prev, { quantity, price }) => {
    return quantity * price + prev;
  }, 0);
  return (
    <div className="w-[40%] max-md:w-[100%]">
      <h3 className="font-bold mb-[20px]">Your order</h3>

      <div className="flex flex-col gap-3">
        {products.map((item) => (
          <OrderCard {...item} key={item._id} />
        ))}
      </div>
      <Descriptions className="mt-[30px]">
        <Descriptions.Item span={3} label="Subtotal">
          ${total || 0}
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Coupon Discount">
          -$(
          {coupon
            ? Number(total * Number(`0.${coupon.discount_for}`)).toFixed(2)
            : "0.00"}
          )
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Shipping">
          $16
        </Descriptions.Item>
      </Descriptions>

      <div className="flex justify-between">
        <h1>Total</h1>
        <h1 className="text-[#46A358]">
          {coupon ? (
            <div>
              <h1 className="line-through">${total + 16}</h1>
              <h1>${total - total * Number(`0.${coupon?.discount_for}`)}</h1>
            </div>
          ) : (
            <div>${total + 16}</div>
          )}
        </h1>
      </div>
    </div>
  );
};

export default Order;
