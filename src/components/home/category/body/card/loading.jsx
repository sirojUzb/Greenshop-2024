import { Skeleton } from "antd";

const Loading = () => {
  return (
    <div className="w-[258px]">
      <div className="w-full h-[300px] flex items-center justify-center bg-[#fbfbfb]">
        {/* <img className="w-full h-full" src={main_image} alt="as" /> */}
        <Skeleton.Image />
      </div>

      <Skeleton.Input />

      <Skeleton.Input />
    </div>
  );
};

export default Loading;
