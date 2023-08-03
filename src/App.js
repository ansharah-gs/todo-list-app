import React from "react";
import "./assets/App.css";
import { BrowserRouter , Route, Routes, Navigate } from "react-router-dom";
import FunFact from "./pages/Funfact";
import Tasks from "./pages/Tasks";
import NotFound from "./pages/Notfound";



export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/fun-fact" element={<FunFact />} />
      <Route path="/to-do-list" element={<Tasks />} />
      <Route path="/" element={<Navigate to="/fun-fact"/>} />

      <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
