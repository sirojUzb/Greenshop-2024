import { useState } from "react";
import { useProductFeatures } from "../../../features";

const Images = () => {
  const [activeImage, setActiveImage] = useState(null);
  const {
    product: { data },
  } = useProductFeatures();

  const activeBorder = "border-[2px] border-[#46A358]";

  return (
    <div className="flex-1 flex gap-[29px] h-[448px]">
      <div className="w-[100px] h-full">
        {data?.detailed_images.map((url, idx) => (
          <div
            onClick={() => setActiveImage(idx)}
            key={url}
            className={`w-[100px] h-[100px] bg-[#f5f5f5] cursor-pointer flex flex-col gap-2 ${
              activeImage === idx ? activeBorder : ""
            }`}
          >
            <img src={url} className="w-full h-full" alt="image-select" />
          </div>
        ))}
        <div></div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={data?.detailed_images?.[activeImage] ?? data?.main_image}
          alt="image-select"
        />
      </div>
    </div>
  );
};

export default Images;
