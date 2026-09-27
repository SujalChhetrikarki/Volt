import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function VehicleDetails({ vehicles }) {
  const { slug } = useParams()
  const vehicle = vehicles.find((item) => item.slug === slug)
  const [selectedImage, setSelectedImage] = useState(vehicle?.gallery?.[0] || '')

  useEffect(() => {
    if (vehicle) {
      setSelectedImage(vehicle.gallery[0])
    }
  }, [vehicle])

  if (!vehicle) {
    return (
      <section className="container page-section">
        <div className="empty-state">Vehicle not found.</div>
      </section>
    )
  }

  return (
    <section className="container page-section details-page">
      <Link to="/vehicles" className="back-link">← Back to all vehicles</Link>

      <div className="details-grid">
        <div className="gallery-panel">
          <img src={selectedImage} alt={vehicle.name} className="main-vehicle-image" />
          <div className="thumbnail-row">
            {vehicle.gallery.map((image) => (
              <button
                key={image}
                type="button"
                className={selectedImage === image ? 'thumb active' : 'thumb'}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} alt={`${vehicle.name} view`} />
              </button>
            ))}
          </div>
        </div>

        <div className="details-content">
          <p className="eyebrow">{vehicle.category}</p>
          <h2>{vehicle.name}</h2>
          <div className="rating-row">5.0/5</div>
          <p className="price-tag">Rs. {vehicle.price.toLocaleString('en-IN')}</p>

          <dl className="spec-list">
            <div><dt>Battery</dt><dd>{vehicle.battery}</dd></div>
            <div><dt>Range</dt><dd>{vehicle.range} km</dd></div>
            <div><dt>Top Speed</dt><dd>{vehicle.topSpeed}</dd></div>
            <div><dt>Charging</dt><dd>{vehicle.charging}</dd></div>
            <div><dt>Battery Type</dt><dd>{vehicle.batteryType}</dd></div>
          </dl>

          <div className="cta-row details-actions">
            <button type="button" className="btn btn-primary">Book Test Drive</button>
            <button type="button" className="btn btn-secondary">Enquire Now</button>
          </div>
        </div>
      </div>

      <div className="feature-panel">
        <h3>Key Features</h3>
        <ul className="feature-list">
          {vehicle.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
