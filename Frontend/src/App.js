import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/index";
import GlobalStyle from "./globalStyles";
import CardDetail from "./page/CardDetail";
import Home from "./page/home";
import Shop from "./page/shop";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/cardDetail/:id" element={<CardDetail />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;
