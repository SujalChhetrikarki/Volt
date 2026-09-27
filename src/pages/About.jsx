export default function About() {
  const stats = [
    { value: '10+', label: 'Vehicle Models' },
    { value: '5,000+', label: 'Happy Customers' },
    { value: '50+', label: 'Service Locations' },
    { value: '10M+', label: 'Electric Mobility' },
  ]

  return (
    <section className="container page-section about-page">
      <div className="section-heading">
        <p className="eyebrow">About Us</p>
        <h2>Who We Are</h2>
      </div>

      <div className="about-intro">
        <p>
          VoltDrive is a modern electric mobility company focused on providing efficient, sustainable and accessible electric vehicles.
        </p>
      </div>

      <div className="mission-grid">
        <article className="mission-card">
          <h3>Our Mission</h3>
          <p>To make electric mobility accessible to everyone.</p>
        </article>
        <article className="mission-card">
          <h3>Our Vision</h3>
          <p>A cleaner and smarter transportation future.</p>
        </article>
      </div>

      <div className="stats-grid large-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
