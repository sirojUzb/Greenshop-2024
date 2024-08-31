import { Empty } from "antd";

const Body = () => {
  return (
    <div className="flex flex-col gap-3">
      <Empty
        className="mt-[10px]"
        description={
          <div>
            <h3 className="text-[18px] text-bold">No products yet...</h3>
          </div>
        }
      />
    </div>
  );
};

export default Body;
