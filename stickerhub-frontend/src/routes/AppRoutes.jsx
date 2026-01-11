import ProtectedRoute from './ProtectedRoute'
import AdminRoute from './AdminRoute'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import StickerDetails from '../pages/StickerDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Layout from '../components/layout/Layout'
import OrderConfirmation from '../pages/OrderConfirmation'
import AdminDashboard from '../pages/admin/AdminDashboard'
import AdminProducts from '../pages/admin/AdminProducts'
import AdminOrders from '../pages/admin/AdminOrders'


function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout"element={ <ProtectedRoute> <Checkout /> </ProtectedRoute> }/>
        <Route path="/stickers/:id" element={<StickerDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/order-confirmation" element={<ProtectedRoute><OrderConfirmation /></ProtectedRoute>} />
        <Route path="/admin"element={<AdminRoute> <AdminDashboard /></AdminRoute>} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<AdminOrders />} />

      </Routes>
    </Layout>
  )
}

export default AppRoutes
