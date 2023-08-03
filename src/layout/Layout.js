import { children } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import Header from "../components/Header";
export default function Layout({children}) {
    return (
        <>
          <Header className="top-header">
            
            <h1>Ansharah's Website </h1>
            <Link to="/fun-fact">Goto FunFacts</Link>
            <span> | </span>
            <Link to="/to-do-list">Goto Todolist</Link>
          </Header>
          {children}
          <Footer />
        </>
      );
}