import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/axios";

export const useProductFeatures = () => {
  const { category, productId } = useParams();
  const axios = useAxios();

  const product = useQuery({
    queryKey: [`product/${category}/${productId}`],
    queryFn: async () => {
      const { data } = await axios({
        url: `/flower/category/${category}/${productId}`,
      });

      return data?.data;
    },
  });

  const user = useQuery({
    queryKey: [`user/${product?.data?.created_by}`],
    queryFn: async () => {
      const { data } = await axios({
        url: `user/by_id/${product?.data?.created_by}`,
      });
      return data?.data;
    },
    enabled: !!product?.data,
  });

  return {
    product,
    user,
  };
};
