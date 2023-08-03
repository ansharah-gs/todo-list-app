import React, { useState } from "react";
import Header from "./components/Header";
import TodoCategory from "./components/TodoCategory";
import Footer from "./components/Footer";
import "./App.css";
import TodoformClass from "./components/TodoFormClass";
import Funfact from "./components/Funfact";

export default function App() {
  return (
    <>
      <Header className="top-header">
        <h1>Todo List ✔</h1>
      </Header>
      <Funfact />
      <TodoCategory />
      
      <Footer />
    </>
  );
}
