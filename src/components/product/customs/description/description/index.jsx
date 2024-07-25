import { useProductFeatures } from "../../../features";

const ProductDescription = () => {
  const {
    product: { data },
  } = useProductFeatures();
  
  return (
    <div className="mt-4">
      <div dangerouslySetInnerHTML={{ __html: data?.description }} />
    </div>
  );
};

export default ProductDescription;
