import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Community from "../Pages/Community/Community";
import RoutesPage from "../Pages/RoutesPage/RoutesPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comunidade" element={<Community />} />
        <Route path="/rotas" element={<RoutesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
