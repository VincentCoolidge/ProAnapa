import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppAsync } from "./App.async";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path={"/"} element={<AppAsync />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
