import { useEffect, useState } from "react";

function Shop() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <h2>Shop Products</h2>

      <div className="products">

        {products.map((product) => (
          <div className="card" key={product._id}>

            {/* 👇 IMAGE YAHA ADD KARO */}
            <img
              src={`http://localhost:5000/uploads/${product.image}`}
              alt={product.name}
              width="150"
            />

            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <button>Add to Cart</button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Shop;