import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

function AdminRoute({ children }) {
  const { user } = useAuth()

  if (!user || user.role !== 'ADMIN') {
    return <Navigate to="/" replace />
  }

  return children
}

export default AdminRoute
