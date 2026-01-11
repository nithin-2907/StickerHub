import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCart } from '../../context/CartContext'

function StickerCard({ sticker }) {
  const { addToCart } = useCart()

  return (
    <div className="sticker-card">
      <img
        src={sticker.imageUrl}
        alt={sticker.name}
        className="sticker-image"
      />

      <div className="sticker-body">
        <h3 className="sticker-title">{sticker.name}</h3>
        <p className="sticker-price">₹{sticker.price}</p>

        <div className="sticker-actions">
          <button
            className="sticker-button"
            onClick={() => addToCart(sticker, 1)}
          >
            <FontAwesomeIcon icon="cart-shopping" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default StickerCard
