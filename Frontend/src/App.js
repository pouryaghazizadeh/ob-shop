import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/index";
import GlobalStyle from "./globalStyles";
import Home from "./page/home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      {/* <Routes>
        <Route index path="/" element={<Home />} />
      </Routes> */}
      <GlobalStyle />
    </div>
  );
}

export default App;
