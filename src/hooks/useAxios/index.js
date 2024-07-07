import axios from "axios";

export const useAxios = () => {
  return async ({ url, method = "GET", params, data, headers }) => {
    return await axios({
      url: `http://localhost:8080/api/${url}`,
      method,
      params: {
        access_token: "64bebc1e2c6d3f056a8c85b7",
        ...params,
      },
      data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...headers,
      },
    });
  };
};
// bu metod -->custom axios = custom hook metodi deyiladi
// api bilan ishlashda 2ta narsa bilan security e'tibor berish kerak.
// params va authorization
