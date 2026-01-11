import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function StickerDetails() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const sticker = {
    id,
    name: 'Code Hacker Sticker',
    price: 149,
    description:
      'High-quality vinyl laptop sticker with a clean tech design.',
    imageUrl: 'https://via.placeholder.com/600x400'
  }

  return (
    <div className="sticker-details">
      <div className="sticker-details-layout">
        <img
          src={sticker.imageUrl}
          alt={sticker.name}
          className="sticker-details-image"
        />

        <div className="sticker-details-info">
          <h1 className="sticker-details-title">{sticker.name}</h1>
          <p className="sticker-details-price">₹{sticker.price}</p>
          <p className="sticker-details-description">
            {sticker.description}
          </p>

          <div className="quantity-selector">
            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="quantity-input"
            />
          </div>

          <button
            className="details-button"
            onClick={() => addToCart(sticker, Number(quantity))}
          >
            <FontAwesomeIcon icon="cart-shopping" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default StickerDetails
