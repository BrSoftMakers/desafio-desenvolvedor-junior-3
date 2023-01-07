import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/modal.css";
import MainRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalContextProvider from "./contexts/GlobalContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>
);
