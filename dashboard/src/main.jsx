import { lazy } from "react";
import ReactDOM from "react-dom/client";
const App = lazy(() => import("./App.jsx"));
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
