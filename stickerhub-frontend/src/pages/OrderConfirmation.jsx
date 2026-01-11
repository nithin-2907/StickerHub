import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

function OrderConfirmation() {
  // Mock order data (later from backend)
  const order = {
    id: 'ORD123456',
    total: 427,
    items: [
      { name: 'Code Hacker Sticker', qty: 2 },
      { name: 'Anime Eyes', qty: 1 }
    ]
  }

  return (
    <div className="order-confirmation">
      <div className="order-icon">
        <FontAwesomeIcon icon="check-circle" />
      </div>

      <h1 className="order-title">Order Placed Successfully!</h1>
      <p className="order-message">
        Thank you for your purchase. Your order has been confirmed.
      </p>

      <div className="order-summary">
        <p className="order-summary-title">
          Order ID: {order.id}
        </p>

        {order.items.map((item, index) => (
          <div key={index} className="order-summary-item">
            <span>
              {item.name} × {item.qty}
            </span>
          </div>
        ))}

        <div className="order-summary-item">
          <strong>Total</strong>
          <strong>₹{order.total}</strong>
        </div>
      </div>

      <div className="order-actions">
        <NavLink to="/" className="order-button">
          Continue Shopping
        </NavLink>

        <NavLink to="/cart" className="order-secondary-button">
          View Cart
        </NavLink>
      </div>
    </div>
  )
}

export default OrderConfirmation
