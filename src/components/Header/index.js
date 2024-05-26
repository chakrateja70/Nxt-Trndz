import './index.css'

const Header = () => (
  <nav className="navBar">
    <div className="nav-content">
      <div className="nav-mobile-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="logo-mobile"
          alt="website logo"
        />
        <button type="button" className="nav-logout-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            className="logout-btn"
            alt="nav logout"
          />
        </button>
      </div>

      <div className="nav-desktop-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="logo-desktop"
          alt="website logo"
        />

        <ul className="navMenu">
          <li className="nav-menu-item">Home</li>
          <li className="nav-menu-item">Products</li>
          <li className="nav-menu-item">Cart</li>
        </ul>
        <button type="button" className="logout-desktop-btn">
          Logout
        </button>
      </div>
    </div>
    <div className="logo-mobile-items">
      <ul className="logo-items-container">
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            className="logo-item-img"
            alt="nav home"
          />
        </li>
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            className="logo-item-img"
            alt="nav products"
          />
        </li>
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            className="logo-item-img"
            alt="nav cart"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
