import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useAuth } from '../../context/AuthProvider'

function Navbar() {
  const { cartItems } = useContext(CartContext)
  const { user, logout } = useAuth()

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        StickerHub
      </NavLink>

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

        {!user ? (
          <>
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
          </>
        ) : (
          <div className="navbar-user">
            <span className="navbar-username">{user.name}</span>
            <button className="navbar-logout" onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
