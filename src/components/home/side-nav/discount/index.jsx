import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../../../../hooks/useAxios";

const Discount = () => {
  const axios = useAxios();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["discount"],
    queryFn: async () => {
      const { data } = await axios({
        url: "/features/discount",
      });
      return data.data;
    },
  });

  const loading = isLoading || isError;

  return (
    <div className="w-full h-[300px] bg-[#d9fae0] mt-[20px]">
      <h3 className="text-2xl font-bold text-center mb-4">{data?.title}</h3>
      <p className="text-2xl font-bold text-center">
        Discount up to {data?.discoount_up_to}%
      </p>
      <img alt="" src={data?.poster_image_url} />
    </div>
  );
};

export default Discount;
