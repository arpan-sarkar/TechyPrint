function Shop() {
  return (
    <div className="container">
      <h2>Shop Products</h2>

      <div className="products">

        <div className="card">
          <h3>Developer T-Shirt</h3>
          <p>₹499</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <h3>Code Hoodie</h3>
          <p>₹899</p>
          <button>Add to Cart</button>
        </div>

      </div>

    </div>
  );
}

export default Shop;