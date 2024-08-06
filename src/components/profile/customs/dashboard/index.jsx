import { useNavigate } from "react-router-dom";
import { dashboard_mock } from "../../../utils/mock";

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#fbfbfb] w-[310px] h-fit text-xl p-[15px] max-sm:hidden">
      <h1 className="font-bold">My Account</h1>
      <div className="flex flex-col gap-3 mt-[15px] border-b border-[#46a358] pb-[35px]">
        {dashboard_mock.map(({ Icon, title, path, id }) => (
          <div
            key={id}
            onClick={() => navigate(path)}
            className={`transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:bg-l-[5px] hover:border-[#46a358] hover:text-[#46a358] hover:text-bold`}
          >
            <Icon />
            <h3 className="font-normal text-base">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
