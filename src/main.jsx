import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MyComponent from "./components/MyComponent.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <MyComponent />
    <MyComponent />
  </React.StrictMode>
);
