import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">

      <h1>TechyPrint</h1>
      <p>Wear Your Code</p>

      <Link to="/shop">
        <button className="btn">Shop Now</button>
      </Link>

    </div>
  );
}

export default Home;