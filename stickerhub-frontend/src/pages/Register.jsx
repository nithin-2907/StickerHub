import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const newErrors = {}

    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    if (!form.password.trim())
      newErrors.password = 'Password is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    alert('Registration successful (mock)')
  }

  return (
    <div className="auth-page">
      <h1 className="auth-title">Register</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-input"
          />
          {errors.name && (
            <span className="form-error">{errors.name}</span>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-input"
          />
          {errors.email && (
            <span className="form-error">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="form-input"
          />
          {errors.password && (
            <span className="form-error">{errors.password}</span>
          )}
        </div>

        <button type="submit" className="checkout-button w-full">
          Register
        </button>
      </form>

      <div className="auth-footer">
        Already have an account?{' '}
        <NavLink to="/login" className="auth-link">
          Login
        </NavLink>
      </div>
    </div>
  )
}

export default Register
