import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModal } from "../../../../redux/generic-slices/modals";
import { useState } from "react";
import Login from "./login";
import Register from "./register";

const AuthModal = () => {
  const dispatch = useDispatch();
  const { authModal } = useSelector(({ modal }) => modal);
  const [active, setActive] = useState("login");

  return (
    <Modal
      footer={false}
      onCancel={() => dispatch(setAuthModal())}
      open={authModal}
    >
      <div className="flex gap-2 items-center justify-center mt-6">
        <h3
          onClick={() => setActive("login")}
          className={`cursor-pointer text-xl transition-all true ${
            active === "login" && "text-[#46A358]"
          }`}
        >
          Login
        </h3>
        <div className="border h-4 bg-[#3D3D3D]" />
        <h3
          onClick={() => setActive("register")}
          className={`cursor-pointer text-xl transition-all true ${
            active === "register" && "text-[#46A358]"
          }`}
        >
          Register
        </h3>
      </div>
      {active === "login" ? <Login /> : <Register />}
    </Modal>
  );
};

export default AuthModal;
