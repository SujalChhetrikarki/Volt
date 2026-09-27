import { Link } from 'react-router-dom'

export default function VehicleCard({ vehicle }) {
  return (
    <article className="vehicle-card">
      <div className="vehicle-image-wrap">
        <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
      </div>

      <div className="vehicle-card-body">
        <div className="vehicle-topline">
          <span className="vehicle-type">{vehicle.category}</span>
          <span className="vehicle-rating">5.0/5</span>
        </div>

        <h3>{vehicle.name}</h3>

        <div className="spec-inline">
          <span>{vehicle.range} km</span>
          <span>{vehicle.battery}</span>
          <span>{vehicle.topSpeed}</span>
        </div>

        <div className="price-row">
          <strong>Rs. {vehicle.price.toLocaleString('en-IN')}</strong>
          <Link to={`/vehicles/${vehicle.slug}`} className="text-link">
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}
