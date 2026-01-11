import { NavLink, Outlet } from 'react-router-dom'

function AdminDashboard() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2 className="admin-title">Admin Panel</h2>

        <NavLink
          to="products"
          className={({ isActive }) =>
            isActive ? 'admin-link admin-link-active' : 'admin-link'
          }
        >
          Products
        </NavLink>

        <NavLink
          to="orders"
          className={({ isActive }) =>
            isActive ? 'admin-link admin-link-active' : 'admin-link'
          }
        >
          Orders
        </NavLink>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminDashboard
