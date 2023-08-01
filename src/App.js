import React, { useState } from "react";
import Header from "./components/Header";
import TodoCategory from "./components/TodoCategory";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Header className="top-header">
        <h1>Todo List ✔</h1>
      </Header>
      <TodoCategory />
      <Footer />
    </>
  );
}
