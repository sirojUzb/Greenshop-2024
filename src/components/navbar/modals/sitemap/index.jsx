import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSiteMap } from "../../../../redux/generic-slices/modals";

const Sitemap = () => {
  const { siteMap } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <Modal
      open={siteMap}
      onCancel={() => dispatch(setSiteMap())}
      title="Sitemap"
      footer={false}
    >
      <div>
        <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:gb-white hover:border-l-[5px] hover:border-[#46a358] hover:text-[#46a358]">
          <h3 className="font-normal text-base">Home</h3>
        </div>
        <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:gb-white hover:border-l-[5px] hover:border-[#46a358] hover:text-[#46a358]">
          <h3 className="font-normal text-base">Blog</h3>
        </div>
        <button className="bg-[#46a358] flex rounded-md w-4/5 m-auto items-center justify-center gap-1 h-9 text-base text-white mt-3">
          Login
        </button>
      </div>
    </Modal>
  );
};

export default Sitemap;
