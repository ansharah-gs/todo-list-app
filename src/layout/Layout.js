import { children } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import Header from "../components/Header";
export default function Layout({ children }) {
  return (
    <>
      <Header className="top-header">
        <h1>Ansharah's Website </h1>
        <div>
          <Button color="info" outline>
            Click Me
          </Button>
        </div>
        <Link to="/fun-fact" className="btn btn-outline-secondary">
          Goto FunFacts
        </Link>
        <span> | </span>
        <Link to="/to-do-list" className="btn btn-outline-secondary">
          Goto Todo List
        </Link>
      </Header>
      {children}
      <Footer />
    </>
  );
}
