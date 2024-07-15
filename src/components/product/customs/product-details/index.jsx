import Details from "./details";
import Images from "./Images";

const ProductDetails = () => {
  return (
    <div className="flex gap-[52px] mt-[43px] h-full">
      <Images />
      <Details />
    </div>
  );
};

export default ProductDetails;
