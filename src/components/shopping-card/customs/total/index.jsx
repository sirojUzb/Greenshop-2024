import { Descriptions } from "antd";
import { useNavigate } from "react-router-dom";

const Total = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[30%] max-lg:w-[100%]">
      <h3 className="font-bold pb-[11px] border-b border-[#46a35880]">
        Card Total
      </h3>
      <div className="flex h-[40px] mt-[35px]">
        <input
          placeholder="Enter coupon code here ..."
          className="w-4/5 border border-[#46a358] pl-[15px] placeholder:font-light rounded-l-lg"
          value=""
        />
        <button className="bg-[#46a358] flex rounded-md items-center justify-center gap-1 text-white w-1/5 rounded-l-none">
          Apply
        </button>
      </div>
      <Descriptions className="mt-[30px]">
        <Descriptions.Item span={3} label="Subtotal">
          $100
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Coupon Discount">
          - $100
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Shipping">
          $16
        </Descriptions.Item>
      </Descriptions>
      <div className="flex justify-between">
        <h1>Total</h1>
        <h1 className="text-[#46a358]">$130.7</h1>
      </div>
      <button className="bg-[#46a358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[40px] mt-[30px]">
        Proceed to checkout
      </button>
      <h3
        onClick={() => navigate("/")}
        className="mt-[14px] text-center text-[#46a358] cursor-pointer"
      >
        Continue Shopping
      </h3>
    </div>
  );
};

export default Total;
