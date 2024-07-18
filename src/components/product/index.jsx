import Description from "./customs/description";
import Header from "./customs/header";
import ProductDetails from "./customs/product-details";

const Product = () => {
  return (
    <div className="w-[80%] m-auto mb-[92px]">
      <Header />
      <ProductDetails />
      <Description />
    </div>
  );
};

export default Product;
