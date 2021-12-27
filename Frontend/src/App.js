import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/index";
import GlobalStyle from "./globalStyles";
import Home from "./page/home/index";
import Login from "./page/login/Login";
import Products from "./page/product";
import CardDetail from "./page/productDetail";
import Register from "./page/register/Register";
import Shop from "./page/shop";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/productDetail/:id" element={<CardDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;
