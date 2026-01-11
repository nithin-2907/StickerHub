import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  const [form, setForm] = useState({
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

    if (!form.email.trim()) newErrors.email = 'Email is required'
    if (!form.password.trim())
      newErrors.password = 'Password is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    alert('Login successful (mock)')
  }

  return (
    <div className="auth-page">
      <h1 className="auth-title">Login</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>

      <div className="auth-footer">
        Don’t have an account?{' '}
        <NavLink to="/register" className="auth-link">
          Register
        </NavLink>
      </div>
    </div>
  )
}

export default Login
