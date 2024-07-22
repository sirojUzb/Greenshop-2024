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
    <div className="w-full h-[370px] bg-gradient-to-b from-[#46A3581A] to-[#46A35808] mt-[20px] relative ">
      <h3 className="text-2xl font-bold flex justify-center  text-center mb-4 absolute top-[30px] pl-[20px] text-[#46A358]">
        {data?.title}
      </h3>
      <p className="text-2xl font-bold text-center flex justify-center mb-8 absolute pt-[100px] pl-[15px]">
        UP TO {data?.discoount_up_to}% OFF
      </p>
      <img
        alt=""
        src={data?.poster_image_url}
        className="absolute top-[150px]"
      />
    </div>
  );
};

export default Discount;
