import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSiteMap } from "../../../../redux/generic-slices/modals";
import Home from "../../../home";

const SiteMap = () => {
  const { siteMap } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <Modal
      open={siteMap}
      onCancel={() => dispatch(setSiteMap())}
      onOk={() => dispatch(setSiteMap())}
      title="Sitemap"
      footer={false}
    >
      <div>
        <div
          onClick={<Home />}
          className="transition flex items-center gap-3 cursor-pointer w-full h-[40px] pl-[5px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358] hover:text-[#46A358]"
        >
          Home
        </div>
        <div
          onClick={""}
          className="transition flex items-center gap-3 cursor-pointer w-full h-[40px] pl-[5px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358] hover:text-[#46A358]"
        >
          Blog
        </div>
        <button className="bg-[#46A358] flex rounded-md w-4/5 m-auto items-center justify-center gap-1 h-9 text-base text-white mt-3">
          Login
        </button>
      </div>
    </Modal>
  );
};

export default SiteMap;
