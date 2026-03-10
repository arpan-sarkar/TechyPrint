import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#020617",
        color: "white"
      }}
    >
      <h2 style={{ color: "#6366f1" }}>TechyPrint</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/shop" style={{ color: "white", textDecoration: "none" }}>
          Shop
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;