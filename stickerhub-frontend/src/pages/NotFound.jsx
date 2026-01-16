import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className="empty-state">
      <h1 className="empty-title">404</h1>
      <p className="empty-message">Page not found</p>
      <NavLink to="/" className="primary-button">
        Go Home
      </NavLink>
    </div>
  )
}

export default NotFound
