import { Carousel } from "antd";
import Slide from "./slide";
import { carousel_mock } from "../../../utils/mock";

const SliderSection = () => {
  return (
    <div className="w-[80%] h-[450px] m-auto bg-[#f5f5f5] mt-3">
      <Carousel>
        {carousel_mock.map((item) => (
          <Slide key={item.id} {...item} />
        ))}
      </Carousel>
    </div>
  );
};

export default SliderSection;
