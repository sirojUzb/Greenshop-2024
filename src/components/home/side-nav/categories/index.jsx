import { Skeleton } from "antd";
import { useSearchParams } from "../../../../hooks/useSearchParams";
import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../../../../hooks/useAxios";

const Categories = () => {
  const axios = useAxios();
  const { getParams, setParams } = useSearchParams();

  const { data, isLoading } = useQuery({
    queryKey: "categories",
    queryFn: async () => {
      const { data } = await axios({ url: "/flower/category" });

      return data.data;
    },
  });

  const selectedCategory = getParams("category") ?? "house-plants";

  const normal_text = "flex justify-between hover:text-[#46A358]";
  const active_text = "flex justify-between text-[#46A358] font-bold";

  return (
    <div className="py-[14px] px-[18px] ">
      <h2 className="font-bold">Categories</h2>
      <div className="flex flex-col gap-3 my-[7px] pl-[12px]">
        {isLoading
          ? Array.from({ length: 9 }).map((_, idx) => (
              <Skeleton.Input block key={idx} />
            ))
          : data.map((category) => {
              return (
                <div
                  key={category._id}
                  className={
                    selectedCategory === category.route_path
                      ? active_text
                      : normal_text
                  }
                  onClick={() => setParams({ category: category.route_path })}
                >
                  <h3>{category.title}</h3>
                  <h3>({category.count})</h3>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Categories;
