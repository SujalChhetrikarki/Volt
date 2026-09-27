import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container page-section">
      <div className="empty-state not-found-box">
        <p className="eyebrow">404</p>
        <h2>Page not found</h2>
        <p>The route you are looking for does not exist or has moved.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
