import { useMemo, useState } from 'react'

const offers = [
  { title: 'Festival Offer', text: 'Save up to Rs. 25,000 on selected EV models.', badge: 'Limited Time' },
  { title: 'Exchange Offer', text: 'Exchange your old vehicle and get special benefits.', badge: 'Easy Upgrade' },
  { title: 'Easy EMI', text: 'Flexible monthly payment options with low-interest EMI plans.', badge: 'Affordable' },
]

export default function Offers() {
  const [price, setPrice] = useState(329999)
  const [downPayment, setDownPayment] = useState(100000)
  const [months, setMonths] = useState(24)

  const emi = useMemo(() => {
    const principal = Math.max(price - downPayment, 0)
    const annualRate = 9.5
    const monthlyRate = annualRate / 12 / 100

    if (!principal || !months || monthlyRate <= 0) {
      return 0
    }

    const numerator = principal * monthlyRate * (1 + monthlyRate) ** months
    const denominator = (1 + monthlyRate) ** months - 1
    return numerator / denominator
  }, [price, downPayment, months])

  return (
    <section className="container page-section offers-page">
      <div className="section-heading">
        <p className="eyebrow">Special Offers</p>
        <h2>Make your switch to electric more affordable</h2>
      </div>

      <div className="offer-grid">
        {offers.map((offer) => (
          <article key={offer.title} className="offer-card">
            <span className="offer-badge">{offer.badge}</span>
            <h3>{offer.title}</h3>
            <p>{offer.text}</p>
          </article>
        ))}
      </div>

      <div className="emi-panel">
        <div className="emi-form">
          <div className="field-group">
            <label htmlFor="vehiclePrice">Vehicle Price</label>
            <input id="vehiclePrice" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
          </div>

          <div className="field-group">
            <label htmlFor="downPayment">Down Payment</label>
            <input id="downPayment" type="number" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} />
          </div>

          <div className="field-group">
            <label htmlFor="months">Loan Period</label>
            <select id="months" value={months} onChange={(e) => setMonths(Number(e.target.value))}>
              <option value={12}>12 months</option>
              <option value={24}>24 months</option>
              <option value={36}>36 months</option>
              <option value={48}>48 months</option>
            </select>
          </div>
        </div>

        <div className="emi-result">
          <p>Estimated Monthly EMI</p>
          <h3>Rs. {Math.round(emi).toLocaleString('en-IN')}</h3>
        </div>
      </div>
    </section>
  )
}
