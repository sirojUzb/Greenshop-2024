import {
  HeartFilled,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const { title, main_image, price, _id, category } = props;

  const viewProduct = () => {
    navigate(`/product/${category}/${_id}`);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full bg-[#fbfbfb] relative group">
        <img className="w-full h-full" src={main_image} alt="flower" />
        <div className="absolute bottom-6 z-10 gap-4 left-[70px] hidden group-hover:flex">
          <div className="w-[35px] h-[35px] rounded-md cursor-pointer bg-white flex items-center justify-center">
            <ShoppingCartOutlined />
          </div>
          <div className="w-[35px] h-[35px] rounded-md cursor-pointer bg-white flex items-center justify-center">
            <HeartFilled className="text-[red]" />
          </div>
          <div
            onClick={viewProduct}
            className="w-[35px] h-[35px] rounded-md cursor-pointer bg-white flex items-center justify-center"
          >
            <SearchOutlined />
          </div>
        </div>
      </div>
      <h3>{title}</h3>
      <p className="text-[#46a358] font-bold">$ {price}</p>
    </div>
  );
};

export default Card;
