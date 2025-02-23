import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row justify-content-center lh-lg text-center">
        <div className="col-12">
          <h1 className="fw-bold fs-1">404</h1>
          <h1 className="fw-bold lh-lg">Oops! Page not found.</h1>
          <p className="text-muted lh-lg">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Link className="fw-light btn btn-dark lh-lg" to="/fun-fact">
            Return to TodoList
          </Link>
        </div>
      </div>
    </div>
  );
}
