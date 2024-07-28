import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useAuth } from "../../../../../configs/auth";
import { useDispatch } from "react-redux";
import { setAuthModal } from "../../../../../redux/generic-slices/modals";
import { useNavigate } from "react-router-dom";
import { useShoppingService } from "../../../../../service/shopping";

const Card = (props) => {
  const { isAuthed } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { onAdd } = useShoppingService();

  const { title, main_image, price, _id, category } = props;

  const addToWishList = () => {
    if (!isAuthed()) return dispatch(setAuthModal());
  };
  const viewProduct = () => {
    navigate(`/product/${category}/${_id}`);
  };

  return (
    <div>
      <div className="flex flex-col max-md:hidden w-[300px]">
        <div className="w-full h-[300px] bg-[#fbfbfb] relative group">
          <img className="w-full h-full" src={main_image} alt="flower" />
          <div className="absolute bottom-6 z-10 gap-4 left-[70px] hidden group-hover:flex">
            <div
              onClick={() => onAdd(props)}
              className="w-[35px] h-[35px] rounded-md cursor-pointer bg-white flex items-center justify-center"
            >
              <ShoppingCartOutlined />
            </div>
            <div
              onClick={addToWishList}
              className="w-[35px] h-[35px] rounded-md cursor-pointer bg-white flex items-center justify-center"
            >
              <HeartOutlined />
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
            <div
              onClick={addToWishList}
              className="w-[35px] h-[35px] rounded-md cursor-pointer bg-white flex items-center justify-center"
            >
              <HeartOutlined />
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
    </div>
  );
};

export default Card;
