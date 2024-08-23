import {
  HeartFilled,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, main_image, price, _id, category } = props;

  const viewProduct = () => {
    navigate(`/product/${category}/${_id}`);
  };

  return (
    <div>
      <div className="flex flex-col max-md:hidden w-[300px]">
        <div className="w-full h-[300px] bg-[#fbfbfb] relative group">
          <img className="w-full h-full" src={main_image} alt="flower" />
          <div className="absolute bottom-6 z-10 gap-4 left-[70px] hidden group-hover:flex">
            <div className="w-[35px] h-[35px] rounded-md cursor-pointer bg-white flex items-center justify-center">
              <ShoppingCartOutlined />
            </div>
            <div className="w-[35px] h-[35px] rounded-md cursor-pointer bg-white flex items-center justify-center">
              <HeartFilled className="text-red-600" />
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
        <p className="font-bold text-[#46A358]">$ {price}</p>
      </div>
      <div className="hidden max-md:flex flex-col min-w-[640px]">
        <div className="w-fit h-[200px] bg-[#fbfbfb] relative group">
          <img className="w-full h-full" src={main_image} alt="flower" />
          <div className="absolute bottom-6 z-10 gap-4 left-[70px] hidden group-hover:flex">
            <div className="w-[35px] h-[35px] rounded-md cursor-pointer bg-white flex items-center justify-center">
              <ShoppingCartOutlined />
            </div>
            <div className="w-[35px] h-[35px] rounded-md cursor-pointer bg-white flex items-center justify-center">
              <HeartFilled className="text-red-600" />
            </div>
            <div className="w-[35px] h-[35px] rounded-md cursor-pointer bg-white flex items-center justify-center">
              <SearchOutlined />
            </div>
          </div>
        </div>
        <h3>{title}</h3>
        <p className="font-bold text-[#46A358]">$ {price}</p>
      </div>
    </div>
  );
};

export default Card;
