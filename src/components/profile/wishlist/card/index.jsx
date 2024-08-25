import {
  HeartFilled,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useAuth } from "../../../../configs/auth";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../../../../hooks/useAxios";
import { useQueryClient } from "@tanstack/react-query";
import { useShoppingService } from "../../../../service/shopping";

const Card = (props) => {
  const { getUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const axios = useAxios();
  const { user } = getUser();
  const { onAdd } = useShoppingService();
  const { title, main_image, price, _id, category } = props;

  const viewProduct = () => {
    navigate(`/product/${category}/${_id}`);
  };

  const onDislike = async ({ _id }) => {
    queryClient.setQueriesData(["wishlist"], (prev) => {
      return prev.filter((value) => value._id !== _id);
    });
    updateUser({
      setter: {
        ...user,
        wishlist: user.wishlist.filter((value) => value._id !== _id),
      },
    });

    await axios({
      url: "user/delete-wishlist",
      method: "DELETE",
      data: {
        _id,
      },
    });
  };

  return (
    <div className="flex flex-col">
      <div className="w-full h-[300px] bg-[#fbfbfb] relative group flex justify-center items-center">
        <img className="w-full h-full" src={main_image} alt="flower" />
        <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
          <div
            onClick={() => onAdd(props)}
            className="bg-[#fffff] w-[35px] h-[35px] flex rounded-lg items-center justify-center cursor-pointer"
          >
            <ShoppingCartOutlined />
          </div>
          <div
            onClick={() => onDislike(props)}
            className="bg-[#fffff] w-[35px] h-[35px] flex rounded-lg items-center justify-center cursor-pointer"
          >
            <HeartFilled className="text-red-600" />
          </div>
          <div
            onClick={viewProduct}
            className="bg-[#fffff] w-[35px] h-[35px] flex rounded-lg items-center justify-center cursor-pointer"
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
