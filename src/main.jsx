import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./delete.css";
import routes from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
