import { Link } from 'react-router-dom'
import VehicleCard from '../components/VehicleCard'

const reasons = [
  { icon: '01', title: 'Long Range', text: 'Extended battery life for everyday commutes and weekend journeys.' },
  { icon: '02', title: 'Smart Technology', text: 'Advanced diagnostics, ride analytics, and app connectivity built in.' },
  { icon: '03', title: 'Affordable', text: 'Value-driven EVs that help lower total ownership and operating costs.' },
  { icon: '04', title: 'Eco Friendly', text: 'Cleaner transportation with zero tailpipe emissions for urban mobility.' },
]

export default function Home({ vehicles }) {
  const featuredVehicle = vehicles[0]

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Smart electric mobility</p>
            <h1>Drive the Future. Drive Electric.</h1>
            <p className="hero-text">
              Discover sleek, efficient, and affordable electric vehicles designed for city life and long-distance comfort.
            </p>
            <div className="cta-row">
              <Link to="/vehicles" className="btn btn-primary">
                Explore Vehicles
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Book a Test Drive
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <img src={featuredVehicle.image} alt={featuredVehicle.name} />
              <div className="hero-floating-box">
                <strong>{featuredVehicle.name}</strong>
                <span>{featuredVehicle.range} km range</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section container">
        <div className="section-heading">
          <p className="eyebrow">Featured EV</p>
          <h2>{featuredVehicle.name}</h2>
        </div>

        <div className="featured-panel">
          <img src={featuredVehicle.image} alt={featuredVehicle.name} />

          <div className="featured-data">
            <div className="stats-grid home-specs">
              <div><strong>{featuredVehicle.range}</strong><span>km Range</span></div>
              <div><strong>{featuredVehicle.battery}</strong><span>Battery</span></div>
              <div><strong>{featuredVehicle.topSpeed}</strong><span>Top Speed</span></div>
              <div><strong>{featuredVehicle.charging}</strong><span>Charging</span></div>
            </div>
            <Link to={`/vehicles/${featuredVehicle.slug}`} className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="reasons-section">
        <div className="container">
          <div className="section-heading center">
            <p className="eyebrow">Why Choose VoltDrive</p>
            <h2>Built for the future of commuting</h2>
          </div>

          <div className="reasons-grid">
            {reasons.map((reason) => (
              <article key={reason.title} className="reason-card">
                <div className="reason-icon">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="popular-section container">
        <div className="section-heading">
          <p className="eyebrow">Popular Vehicles</p>
          <h2>Find a ride that fits your lifestyle</h2>
        </div>

        <div className="vehicle-grid">
          {vehicles.slice(0, 4).map((vehicle) => (
            <VehicleCard key={vehicle.slug} vehicle={vehicle} />
          ))}
        </div>
      </section>
    </>
  )
}
