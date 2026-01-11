import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import StickerDetails from '../pages/StickerDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Layout from '../components/layout/Layout'
import OrderConfirmation from '../pages/OrderConfirmation'


function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/stickers/:id" element={<StickerDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/checkout" element={<Checkout />} />


      </Routes>
    </Layout>
  )
}

export default AppRoutes
