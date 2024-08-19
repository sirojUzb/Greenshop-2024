import {
  BarsOutlined,
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge, Button } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthModal, setSiteMap } from "../../redux/generic-slices/modals";
import AuthModal from "./modals/auth";
import { useAuth } from "../../configs/auth";
import SiteMap from "./modals/sitemap";
import { useShoppingService } from "../../service/shopping";

const Navbar = () => {
  const { isAuthed, getUser } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useShoppingService();

  const { user } = getUser();

  return (
    <>
      <AuthModal />
      <SiteMap />

      <div className="w-[80%] h-20 m-auto flex items-center justify-between border-b border-b-[#46A35880] max-md:w-[95%]">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            alt="logo"
          />
        </div>
        <div className="flex gap-12 items-center h-full max-md:hidden">
          <h3
            onClick={() => navigate("/")}
            className="relative cursor-pointer before:w-full before:h-1 before:absolute before:left-0 hover:before:bg-[#46a358] before:bottom-[-28px] before:content-['']"
          >
            Home
          </h3>
          <h3 className="relative cursor-pointer before:w-full before:h-1 before:absolute before:left-0 hover:before:bg-[#46a358] before:bottom-[-28px] before:content-['']">
            Shop
          </h3>
          <h3 className="relative cursor-pointer before:w-full before:h-1 before:absolute before:left-0 hover:before:bg-[#46a358] before:bottom-[-28px] before:content-['']">
            Plant care
          </h3>
          <h3 className="relative cursor-pointer before:w-full before:h-1 before:absolute before:left-0 hover:before:bg-[#46a358] before:bottom-[-28px] before:content-['']">
            Blogs
          </h3>
        </div>
        <div className="flex gap-[30px] max-md:hidden">
          <SearchOutlined className="cursor-pointer text-[25px]" />
          <Badge count={products?.length} className="mt-[5px]">
            <ShoppingCartOutlined
              onClick={() => navigate("/shopping-card")}
              className="cursor-pointer text-[25px]"
            />
          </Badge>

          {isAuthed() ? (
            <button
              onClick={() => navigate("/profile")}
              type="button"
              className="w-[100px] h-[35px] bg-[#46a358] flex gap-2 items-center text-white cursor-pointer "
            >
              {user.name}
            </button>
          ) : (
            <Button
              onClick={() => dispatch(setAuthModal())}
              primary
              className="w-[100px] h-[35px] bg-[#46a358] flex gap-2 items-center text-white cursor-pointer animate-bounce"
            >
              <LoginOutlined /> Login
            </Button>
          )}
        </div>
        <div className="hidden max-md:flex gap-4">
          <SearchOutlined className="cursor-pointer text-[20px]" />
          <ShoppingCartOutlined className="cursor-pointer text-[20px]" />
          <Button
            onClick={() => dispatch(setSiteMap())}
            className="hidden max-md:flex items-center justify-center"
          >
            <BarsOutlined />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
