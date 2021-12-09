import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/index";
import GlobalStyle from "./globalStyles";
import CardDetail from "./page/productDetail";
import Products from "./page/product";
import Home from "./page/home/index";
import Shop from "./page/shop";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/productDetail/:id" element={<CardDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;
