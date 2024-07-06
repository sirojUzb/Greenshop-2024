import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../../../../hooks/useAxios";
import { useSearchParams } from "../../../../hooks/useSearchParams";
import Card from "./card";
import Loading from "./card/loading";

const Body = () => {
  const axios = useAxios();
  const { getParams } = useSearchParams();

  const category = getParams("category" ?? "house-plants");

  const { data, isLoading } = useQuery({
    queryKey: [category],
    queryFn: async () => {
      const { data } = await axios({
        url: `/flower/category/${category}`,
      });
      return data.data;
    },
  });

  console.log(data);

  return (
    <div className="flex flex-wrap gap-4 mt-8">
      {isLoading
        ? Array.from({ length: 15 }).map((_, idx) => <Loading key={idx} />)
        : data?.map((item) => <Card key={item.id} {...item} />)}
    </div>
  );
};

export default Body;
