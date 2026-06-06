const products = [
  {
    name: "iPhone 15",
    price: "₹79,999",
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400"
  },
  {
    name: "Gaming Laptop",
    price: "₹89,999",
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400"
  },
  {
    name: "Sony Headphones",
    price: "₹24,999",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
  },
];

function ProductCards() {
  return (
    <section className="products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((p, i) => (
          <div className="product-card" key={i}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p className="price">{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}
export default ProductCards;