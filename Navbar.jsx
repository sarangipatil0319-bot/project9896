function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">TechStore</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/categories">Categories</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;