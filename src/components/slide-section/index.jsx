import { Carousel } from "antd";
import Slide1 from "./slide-1";

const SlideSection = () => {
  return (
    <div className="w-[80%] h-[450px] m-auto bg-[#f5f5f5] mt-3">
      <Carousel>
        <Slide1 />
        <Slide1 />
        <Slide1 />
      </Carousel>
    </div>
  );
};

export default SlideSection;
