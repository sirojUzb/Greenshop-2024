import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "antd";
import { useSearchParams } from "../../../../hooks/useSearchParams";

const Categories = () => {
  const { getParams, setParams } = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await axios({
        url: "http://localhost:8080/api/flower/category?access_token=64bebc1e2c6d3f056a8c85b7",
        method: "GET",
      });
      setLoading(false);

      setCategories(data.data);
    })();
  }, []);

  const selectedCategory = getParams("category") ?? "house-plants";
  const normal_text =
    "w-full flex justify-between items-center mt-[7px] hover:text-[#46a358] cursor-pointer";
  const active_text =
    "w-full flex justify-between items-center mt-[7px] text-[#46a358] cursor-pointer";

  return (
    <div>
      <h3 className="font-bold">Categories</h3>
      <div className="pl-[12px] w-full">
        {loading
          ? Array.from({ length: 10 }).map((_, idx) => (
              <Skeleton.Input block key={idx} />
            ))
          : categories.map((category) => (
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
            ))}
      </div>
    </div>
  );
};

export default Categories;
