import { useState } from "react";
import { useProductFeatures } from "../../features";
import ProductDescription from "./description";
import Review from "./review";

const Description = () => {
  const [active, setActive] = useState("description");
  const {
    product: { data },
  } = useProductFeatures();

  const active_style = "hover:text-[#46A358] text-[#46A358]";

  return (
    <div>
      <div className="flex gap-5 border-b pb-[5px] border-[#46A358]">
        <div
          onClick={() => setActive("description")}
          className={`cursor-pointer ${
            active === "description" && active_style
          }`}
        >
          Product description
        </div>
        <div
          onClick={() => setActive("review")}
          className={`cursor-pointer ${active === "review" && active_style}`}
        >
          Reviews
        </div>
      </div>
      {active === "description" ? <ProductDescription /> : <Review />}
    </div>
  );
};

export default Description;
