import { useLocation, useNavigate } from "react-router-dom";
import { dashboard_mock } from "../../../../utils/mock";
import { ExclamationCircleFilled, LogoutOutlined } from "@ant-design/icons";
import { Modal } from "antd";
const { confirm } = Modal;

const Dashboard = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onLogout = () => {
    return confirm({
      title: "Do you want to Logout?",
      icon: <ExclamationCircleFilled />,
      content: "Please make sure, because this action cannot be undone",
      okButtonProps: {
        danger: true,
      },
      okText: "I'm sure",
      onOk: () => {
        console.log("Ok!");
      },
    });
  };
  const active_style =
    "border-l-[5px] border-[#46A358] text-[#46A358] text-bold bg-white ";

  console.log(pathname.slice(9));
  // /profile
  return (
    <div className="bg-[#FBFBFB] w-[310px] h-fit text-xl p-[15px] max-sm:hidden">
      <h1 className="font-bold">My Account</h1>
      <div className="flex flex-col gap-3 mt-[15px] border-b border-[#46A35880] pb-[35px]">
        {dashboard_mock.map(({ Icon, title, path, id }) => (
          <div
            key={id}
            onClick={() => navigate(path)}
            className={`transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358] hover:text-[#46A358] hover:text-bold ${
              pathname.slice(9) === path && active_style
            }`}
          >
            <Icon />
            <h3 className="font-normal text-base">{title}</h3>
          </div>
        ))}
      </div>
      <div
        onClick={() => onLogout()}
        className="flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] mt-[20px] text-base text-red-600"
      >
        <LogoutOutlined className="w-[20px] h-[20px]" />
        <h3 className="font-normal">Log out</h3>
      </div>
    </div>
  );
};

export default Dashboard;
