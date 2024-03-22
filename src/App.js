import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./conpanets/Header";
import Hero from "./conpanets/Hero";
import Admin from "./conpanets/Admin";
import Basket from "./conpanets/Basket";
import AddProducct from "./conpanets/AddProduct";
import ProductCard from "./conpanets/ProductCard";
import DeatalisProduct from "./conpanets/Pages/DeatalisProduct.jsx";
import Search from "./conpanets/Search/index.jsx";
import AdminProduct from "./conpanets/AdminProduct/index.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/addproduct" element={<AddProducct />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/deatalisproduct/:Proid" element={<DeatalisProduct />} />
        <Route path="/search/:proName" element={<Search />} />
        <Route path="/adminproduct" element={<AdminProduct />} />



      </Routes>
    </div>
  );
}

export default App;
