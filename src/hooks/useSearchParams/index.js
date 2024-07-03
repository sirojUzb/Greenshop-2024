import {
  useLocation,
  useSearchParams as useSearchRouterParam,
} from "react-router-dom";

export const useSearchParams = () => {
  const { search } = useLocation();
  const [get, set] = useSearchRouterParam();

  const params = new URLSearchParams(search);

  const getAllParams = () => {
    return {
      keys: Array.from(params.keys()),
      values: Array.from(params.values()),
      pair: Object.fromEntries(Array.from(params.entries())),
    };
  };

  const setParams = (params) => {
    const { pair } = getAllParams();
    set({ ...pair, ...params });
  };

  const getParams = (params) => get.get(params);

  return { getAllParams, setParams, getParams };
};
