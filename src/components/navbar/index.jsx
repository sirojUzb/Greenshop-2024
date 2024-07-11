import {
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setauthModal } from "../../redux/generic-slices/modals";
import AuthModal from "./modals/auth";
import useAuth from "../../configs/auth";

const Navbar = () => {
  const { isAuthed, getUser } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = getUser();

  return (
    <>
      <AuthModal />
      <div className="w-[80%] h-20 m-auto flex items-center justify-between border-b border-b-[#46A35880]">
        <div>
          <img
            className="cursor-pointer"
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            alt="logo"
          />
        </div>
        <div className="flex gap-12 items-center h-full">
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
        <div className="flex gap-[30px]">
          <SearchOutlined className="cursor-pointer text-[20px]" />
          <ShoppingCartOutlined className="cursor-pointer text-[20px]" />
          {isAuthed() ? (
            <Button
              primary
              className="w-[100px] h-[35px] bg-[#46a358] flex gap-2 items-center text-white cursor-pointer "
            >
              {user.name}
            </Button>
          ) : (
            <Button
              onClick={() => dispatch(setauthModal())}
              primary
              className="w-[100px] h-[35px] bg-[#46a358] flex gap-2 items-center text-white cursor-pointer animate-bounce"
            >
              <LoginOutlined /> Login
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
