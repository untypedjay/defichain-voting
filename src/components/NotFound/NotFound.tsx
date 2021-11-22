import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <h1>Epic 404!</h1>
            <Link to="/">Return home</Link>
        </>
    );
}