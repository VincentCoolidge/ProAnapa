import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { AppAsync } from "./App.async";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { ModalProvider } from "@contexts/modalContext";

import GlobalStyle from "./globalStyle.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <Suspense>
          <GlobalStyle />
          <Routes>
            <Route path={"/"} element={<AppAsync />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
