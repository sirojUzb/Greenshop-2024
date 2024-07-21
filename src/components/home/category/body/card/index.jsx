import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useAuth } from "../../../../../configs/auth";
import { useDispatch } from "react-redux";
import { setAuthModal } from "../../../../../redux/generic-slices/modals";
import { useNavigate } from "react-router-dom";

const Card = ({ title, main_image, price, _id, category }) => {
  const { isAuthed } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToShoppingCart = () => {
    if (!isAuthed()) return dispatch(setAuthModal());
  };
  const addToWishList = () => {
    if (!isAuthed()) return dispatch(setAuthModal());
  };
  const viewProduct = () => {
    navigate(`/product/${category}/${_id}`);
  };

  return (
    <div className="flex flex-col w-[230px] max-md:hidden">
      <div className="w-full h-[250px] bg-[#fbfbfb] relative group">
        <img className="w-full h-full" src={main_image} alt="flower" />
        <div className="absolute bottom-6 z-10 gap-4 left-[70px] hidden group-hover:flex">
          <div
            onClick={addToShoppingCart}
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
  );
};

export default Card;
