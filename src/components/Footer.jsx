import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">V</span>
            <span>VoltDrive</span>
          </div>
          <p className="footer-copy">
            Smart, sustainable electric mobility for modern city life.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/vehicles">Vehicles</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/offers">Offers</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>Kathmandu, Nepal</li>
            <li>9845808198</li>
            <li>info@voltdrive.com</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 VoltDrive. All rights reserved.</span>
        <span className="powered-by">Powered by Stratigo Collectives</span>
      </div>
    </footer>
  )
}
