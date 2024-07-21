import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../../../../hooks/useAxios";
import { useSearchParams } from "../../../../hooks/useSearchParams";
import Card from "./card";
import Loading from "./card/loading";

const Body = () => {
  const axios = useAxios();
  const { getParams } = useSearchParams();

  const category = getParams("category") ?? "house-plants";
  const min = getParams("min") ?? 0;
  const max = getParams("max") ?? 1500;
  const sort = getParams("sort") ?? "default-sorting";
  const type = getParams("type") ?? "all-plants";

  const cashe_key = `category=${category}&min=${min}&max=${max}&sort=${sort}&type=${type}`;

  const { data, isLoading } = useQuery({
    queryKey: [cashe_key],
    queryFn: async () => {
      const { data } = await axios({
        url: `/flower/category/${category}`,
        params: {
          range_min: min,
          range_max: max,
          sort,
        },
      });
      return data.data;
    },
  });

  return (
    <div className="grid  grid-cols-3 gap-4 mt-[30px] max-sm:grid-cols-2">
      {isLoading
        ? Array.from({ length: 15 }).map((_, idx) => <Loading key={idx} />)
        : data?.map((item) => <Card key={item.id} {...item} />)}
    </div>
  );
};

export default Body;
