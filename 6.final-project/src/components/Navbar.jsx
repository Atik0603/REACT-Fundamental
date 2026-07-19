import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      gap: "20px",
      backgroundColor: "#1a1a2e",
      padding: "16px 32px",
      alignItems: "center"
    }}>
      <span style={{ color: "#00d4ff", fontWeight: "bold", fontSize: "20px", marginRight: "auto" }}>
        ContactApp
      </span>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/contacts" style={linkStyle}>Contact List</Link>
      <Link to="/add" style={linkStyle}>Add Contact</Link>
    </nav>
  );
}

const linkStyle = {
  color: "#e0e0e0",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500"
};

export default Navbar;