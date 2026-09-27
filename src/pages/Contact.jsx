import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  vehicle: '',
  date: '',
  message: '',
}

export default function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const nextErrors = {}

    if (!formData.name.trim()) nextErrors.name = 'Name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Please enter a valid email.'
    if (!formData.phone.trim()) nextErrors.phone = 'Phone is required.'
    if (!formData.vehicle) nextErrors.vehicle = 'Please select a vehicle.'
    if (!formData.message.trim()) nextErrors.message = 'Message is required.'

    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitted(false)
      return
    }

    setErrors({})
    setSubmitted(true)
    setFormData(initialForm)
  }

  return (
    <section className="container page-section contact-page">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Book a test drive</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <p className="eyebrow dark">Our showroom</p>
          <h3>Visit our experience center</h3>

          <div className="contact-detail-list">
            <div className="detail-item">
              <span className="detail-label">Address</span>
              <strong>Kathmandu, Nepal</strong>
            </div>
            <div className="detail-item">
              <span className="detail-label">Call</span>
              <a href="tel:9845808198">9845808198</a>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <a href="mailto:info@voltdrive.com">info@voltdrive.com</a>
            </div>
            <div className="detail-item">
              <span className="detail-label">Hours</span>
              <strong>Mon - Sat / 9:00 - 18:00</strong>
            </div>
          </div>

          <div className="map-wrapper" aria-label="Map showing our Kathmandu showroom location">
            <iframe
              title="VoltDrive showroom map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=85.2870%2C27.6990%2C85.3550%2C27.7450&layer=mapnik&marker=27.7172%2C85.3240"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className="field-group">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="field-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="field-group">
              <label htmlFor="vehicle">Select Vehicle</label>
              <select id="vehicle" name="vehicle" value={formData.vehicle} onChange={handleChange}>
                <option value="">Select a vehicle</option>
                <option value="Volt X1">Volt X1</option>
                <option value="Volt X2">Volt X2</option>
                <option value="Volt City S">Volt City S</option>
                <option value="Volt Cargo 1">Volt Cargo 1</option>
              </select>
              {errors.vehicle && <span className="error-text">{errors.vehicle}</span>}
            </div>

            <div className="field-group full-width">
              <label htmlFor="date">Preferred Date</label>
              <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} />
            </div>

            <div className="field-group full-width">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} />
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>
          </div>

          <button type="submit" className="btn btn-primary submit-btn">Submit Inquiry</button>
          {submitted && (
            <p className="success-message">Your test-drive request has been submitted successfully.</p>
          )}
        </form>
      </div>
    </section>
  )
}
