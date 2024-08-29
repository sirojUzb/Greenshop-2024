import cookie from "js-cookie";

export const useAuth = () => {
  const signIn = ({ token, user, tokenType = "Bearer" }) => {
    cookie.set("token", token);
    cookie.set("user", JSON.stringify(user));
    cookie.set("tokenType", tokenType);
  };

  const signOut = () => {
    cookie.remove("token");
    cookie.remove("user");
    cookie.remove("tokenType");
  };

  const updateUser = ({ setter }) => {
    cookie.set("user", JSON.stringify(setter));
  };

  const getUser = () => {
    return {
      token: cookie.get("token"),
      user: JSON.parse(cookie.get("user") ?? "{}"),
      tokenType: cookie.get("tokenType"),
    };
  };

  const isAuthed = () => {
    return !!cookie.get("token");
  };

  return {
    signIn,
    signOut,
    getUser,
    isAuthed,
    updateUser,
  };
};
