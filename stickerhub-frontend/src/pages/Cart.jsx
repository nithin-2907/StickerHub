import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {
  const navigate = useNavigate()
  const { cartItems, removeFromCart, updateQuantity } = useCart()

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>
  }

  return (
    <div className="cart-page">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-info">
            <p className="cart-item-title">{item.name}</p>
            <p className="cart-item-price">₹{item.price}</p>
          </div>

          <div className="cart-item-actions">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, Number(e.target.value))
              }
              className="cart-quantity-input"
            />

            <button
              className="cart-remove"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <p className="cart-total">Total: ₹{total}</p>
        <button
          className="cart-checkout"
          onClick={() => navigate('/checkout')}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
