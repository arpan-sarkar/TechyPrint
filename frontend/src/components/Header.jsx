import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">TechyPrint</div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </header>
  );
}

export default Header;