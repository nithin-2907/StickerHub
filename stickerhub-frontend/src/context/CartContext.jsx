import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (sticker, quantity = 1) => {
    const qty = Number(quantity)

    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === sticker.id
      )

      if (existing) {
        return prev.map((item) =>
          item.id === sticker.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        )
      }

      return [...prev, { ...sticker, quantity: qty }]
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    )
  }

  const updateQuantity = (id, quantity) => {
    const qty = Math.max(1, Number(quantity))

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    )
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
