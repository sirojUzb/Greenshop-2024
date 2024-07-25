import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Product from "./pages/product";
import ShoppingCard from "./pages/shopping-card";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:category/:productId" element={<Product />} />
        <Route path="/shopping-card" element={<ShoppingCard />} />
      </Routes>
    </div>
  );
};

export default App;
