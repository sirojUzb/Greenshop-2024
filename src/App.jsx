import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Product from "./pages/product";
import ShoppingCard from "./pages/shopping-card";
import ProductCheckout from "./components/product-checkout";
import Profile from "./components/profile";
import { dashboard_mock } from "./utils/mock";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:category/:productId" element={<Product />} />
        <Route path="/shopping-card" element={<ShoppingCard />} />
        <Route path="/product-checkout" element={<ProductCheckout />} />
        <Route path="/profile" element={<Profile />}>
          {dashboard_mock.map(({ path, Component }) => (
            <Route path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
// 2-video 11-daqiqadan kor
