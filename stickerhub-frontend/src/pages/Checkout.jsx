import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Checkout() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    pincode: ''
  })

  const [errors, setErrors] = useState({})

  // ✅ USED properly (no ESLint warning)
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const validate = () => {
    const newErrors = {}

    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    if (!form.address.trim()) newErrors.address = 'Address is required'
    if (!form.city.trim()) newErrors.city = 'City is required'
    if (!form.pincode.trim()) newErrors.pincode = 'Pincode is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    // ✅ Mock success → Order confirmation
    navigate('/order-confirmation')
  }

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">Checkout</h1>

      <form className="checkout-form" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-input"
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-input"
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>

        {/* Address */}
        <div className="form-group">
          <label className="form-label">Address</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            className="form-input"
          />
          {errors.address && (
            <span className="form-error">{errors.address}</span>
          )}
        </div>

        {/* City */}
        <div className="form-group">
          <label className="form-label">City</label>
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            className="form-input"
          />
          {errors.city && <span className="form-error">{errors.city}</span>}
        </div>

        {/* Pincode */}
        <div className="form-group">
          <label className="form-label">Pincode</label>
          <input
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            className="form-input"
          />
          {errors.pincode && (
            <span className="form-error">{errors.pincode}</span>
          )}
        </div>

        {/* Submit */}
        <div className="checkout-actions">
          <button type="submit" className="checkout-button">
            Place Order
          </button>
        </div>
      </form>
    </div>
  )
}

export default Checkout
