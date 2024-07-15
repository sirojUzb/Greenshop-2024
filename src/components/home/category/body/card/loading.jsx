import { Skeleton } from "antd";

const Loading = () => {
  return (
    <div>
      <div className="w-full h-[300px] bg-[#fbfbfb] flex items-center justify-center">
        <Skeleton.Image active />
      </div>
      <Skeleton.Input active />
      <Skeleton.Input active />
    </div>
  );
};

export default Loading;
