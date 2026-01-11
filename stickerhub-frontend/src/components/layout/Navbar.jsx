import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

function Navbar() {
  const { cartItems } = useCart()

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <nav className="navbar">
      {/* Logo */}
      <NavLink to="/" className="navbar-brand">
        StickerHub
      </NavLink>

      {/* Menu */}
      <div className="navbar-menu">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav-link-active' : 'nav-link'
          }
        >
          Shop
        </NavLink>

        <NavLink to="/cart" className="cart-link">
          <FontAwesomeIcon icon="cart-shopping" size="lg" />
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? 'nav-link-active' : 'nav-link'
          }
        >
          Login
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? 'nav-link-active' : 'nav-link'
          }
        >
          Register
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
