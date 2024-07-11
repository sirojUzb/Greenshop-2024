import cookie from "js-cookie";

export const useAuth = () => {
  const singIn = ({ token, user, tokenType = "Bearer" }) => {
    cookie.set("token", token);
    cookie.set("user", JSON.stringify(user));
    cookie.set("tokenTupe", tokenType);
  };

  const singOut = () => {
    cookie.remove("token");
    cookie.remove("user");
    cookie.remove("tokenTupe");
  };

  const getUser = () => {
    return {
      token: cookie.get("token"),
      user: JSON.parse(cookie.get("user") ?? "{}"),
      tokenType: cookie.get("tokenTupe"),
    };
  };

  const isAuth = () => {
    return !!cookie.get("token");
  };

  return {
    singIn,
    singOut,
    getUser,
    isAuth,
  };
};
