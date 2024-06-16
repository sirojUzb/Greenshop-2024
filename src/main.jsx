import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";

const authStore = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider store={authStore}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AuthProvider>
);
