import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1 style={{ fontSize: "72px", color: "#1a1a2e" }}>404</h1>
      <p style={{ fontSize: "20px", color: "#555" }}>Page not found.</p>
      <Link to="/" style={{ color: "#00d4ff", fontSize: "16px" }}>Go back home</Link>
    </div>
  );
}

export default NotFound;