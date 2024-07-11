import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthModal,
  setNavbarModal,
} from "../../../../redux/generec-slices/modals";
import Pages from "../../pages";
import { LoginOutlined } from "@ant-design/icons";

const NavbarPages = () => {
  const dispatch = useDispatch();
  const { navbarModal } = useSelector(({ modal }) => modal);

  return (
    <Modal
      title="Site map"
      footer={false}
      onCancel={() => dispatch(setNavbarModal())}
      open={navbarModal}
    >
      <div className="p-[15px]">
        <Pages />

        <button
          onClick={() => dispatch(setAuthModal())}
          type="button"
          className="bg-[#46A358] w-[70%] m-auto h-[35px] text-[#fff] flex gap-2 justify-center items-center rounded-md mt-8"
        >
          <LoginOutlined />
          Login
        </button>
      </div>
    </Modal>
  );
};

export default NavbarPages;
