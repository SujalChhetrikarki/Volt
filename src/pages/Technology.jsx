import FeatureCard from '../components/FeatureCard'

const highlights = [
  { icon: '01', title: 'Battery Technology', text: 'Advanced lithium-ion cells with efficient thermal regulation and high density for longer range.' },
  { icon: '02', title: 'Smart Connectivity', text: 'Real-time diagnostics, ride tracking, and app-linked controls for a seamless driving experience.' },
  { icon: '03', title: 'Regenerative Braking', text: 'Recover energy while slowing down and improve efficiency during city rides.' },
  { icon: '04', title: 'Safety', text: 'Disc brakes, LED lights, stability control, and integrated security systems offer complete safety.' },
  { icon: '05', title: 'Charging', text: 'Fast charging and adaptive power management help reduce downtime on the move.' },
]

export default function Technology() {
  return (
    <section className="container page-section technology-page">
      <div className="section-heading center">
        <p className="eyebrow">Innovation</p>
        <h2>Technology That Moves You Forward</h2>
      </div>

      <div className="feature-grid">
        {highlights.map((item) => (
          <FeatureCard key={item.title} title={item.title} text={item.text} icon={item.icon} />
        ))}
      </div>

      <div className="charging-flow">
        <div className="flow-step">Plug</div>
        <span>→</span>
        <div className="flow-step">Charge</div>
        <span>→</span>
        <div className="flow-step">Monitor</div>
        <span>→</span>
        <div className="flow-step">Ride</div>
      </div>
    </section>
  )
}
