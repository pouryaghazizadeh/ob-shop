import React from "react";
import ReactDOM from "react-dom";
// provider redux
import { Provider } from "react-redux";
// tools
import { BrowserRouter } from "react-router-dom";
// store redux 
import store from "./redux/store";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
