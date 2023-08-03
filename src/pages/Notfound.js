import { Link } from "react-router-dom";
export default function NotFound() {
    return (
        <>
            <h1>Oops! Page not found.</h1>
            <Link to="/fun-fact">Goto Todolist</Link>
        </>
    );
}