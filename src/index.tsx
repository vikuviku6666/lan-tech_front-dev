import React from "react";
import ReactDOM from "react-dom";
import Products from "./modules/Products";
import reportWebVitals from "./reportWebVitals";
// todo: propose a proper styling for the app
// CSS-in-JS is the way to go
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Products />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
