import './NavBar.css';



function NavBar() {
  return (
    <>
      <nav className="navbar">
          <div>
              <ul className="lista-nav">
                <li className="lista-nav-items">Home</li>
                <li className="lista-nav-items">Products</li>
                <li className="lista-nav-items">Wishlist</li>
                <li className="lista-nav-items">Cart</li>
              </ul>
          </div>
      </nav>
    </>
  );
}

export default NavBar;