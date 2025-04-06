import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import Header from "../components/Header";
export default function Layout({ children }) {
  return (
    <>
      <Header className="top-header">
        <h1>Ansharah's Website </h1>
        <Link to="/fun-fact" className="btn btn-outline-info">
          FunFacts
        </Link>
        <span> </span>
        <Link to="/to-do-list" className="btn btn-outline-primary">
          Todo List
        </Link>
      </Header>
      {children}
      <Footer />
    </>
  );
}
