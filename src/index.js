import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Main from "@pages/Main";
import PropMgmt from "@pages/PropMgmt";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Layout from "@components/Layout";

import GlobalStyle from "./globalStyle.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense>
        <GlobalStyle />
        <ToastContainer />
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route path="/" element={<Navigate to="main" replace />} />
            <Route path="main" element={<Main />} />
            <Route path="property-management" element={<PropMgmt />} />
            <Route path="*" element={<Navigate to="not-found" replace />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
