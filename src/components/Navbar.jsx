import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Vehicles', path: '/vehicles' },
  { label: 'Technology', path: '/technology' },
  { label: 'Offers', path: '/offers' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container">
        <Link to="/" className="brand" aria-label="VoltDrive home">
          <span className="brand-mark">V</span>
          <span>VoltDrive</span>
        </Link>

        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <button type="button" className="icon-button" aria-label="Search">
            Search
          </button>
          <Link to="/contact" className="btn btn-primary">
            Book Test Drive
          </Link>
        </div>
      </nav>
    </header>
  )
}
