import Home from "./pages/home";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
