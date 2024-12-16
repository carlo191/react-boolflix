import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="#">
          {import.meta.env.VITE_APP_NAME || "React project"}
        </Link>
      </div>
    </nav>
  );
}