import { useMemo, useState } from 'react'
import VehicleCard from '../components/VehicleCard'

const categories = ['All', 'Scooter', 'Motorcycle', 'Commercial']

export default function Vehicles({ vehicles }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortOrder, setSortOrder] = useState('low-high')
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false)

  const searchSuggestions = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase()

    const popularSearches = [
      ...vehicles.map((vehicle) => vehicle.name),
      ...categories.filter((category) => category !== 'All'),
      ...vehicles.flatMap((vehicle) => vehicle.features || []),
    ]

    if (!normalizedQuery) {
      return popularSearches.slice(0, 6)
    }

    return popularSearches.filter((item) => {
      const candidate = item.toLowerCase()
      return candidate.includes(normalizedQuery)
    }).slice(0, 6)
  }, [searchTerm, vehicles])

  const filteredVehicles = useMemo(() => {
    const normalizedQuery = searchTerm.toLowerCase().trim()

    let results = vehicles.filter((vehicle) => {
      const matchesCategory =
        selectedCategory === 'All' || vehicle.category === selectedCategory

      const searchableText = [
        vehicle.name,
        vehicle.category,
        vehicle.description,
        ...(vehicle.features || []),
      ]
        .join(' ')
        .toLowerCase()

      const matchesQuery =
        !normalizedQuery || searchableText.includes(normalizedQuery)

      return matchesCategory && matchesQuery
    })

    if (sortOrder === 'low-high') {
      results = [...results].sort((a, b) => a.price - b.price)
    }

    if (sortOrder === 'high-low') {
      results = [...results].sort((a, b) => b.price - a.price)
    }

    return results
  }, [searchTerm, selectedCategory, sortOrder, vehicles])

  const handleSuggestionSelect = (value) => {
    setSearchTerm(value)
    setIsSuggestionsOpen(false)
  }

  return (
    <section className="container page-section">
      <div className="section-heading">
        <p className="eyebrow">All Vehicles</p>
        <h2>Choose your perfect electric ride</h2>
      </div>

      <div className="filter-panel">
        <div className="search-box-wrapper">
          <label className="search-box">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value)
                setIsSuggestionsOpen(true)
              }}
              onFocus={() => setIsSuggestionsOpen(true)}
              onBlur={() => window.setTimeout(() => setIsSuggestionsOpen(false), 120)}
              placeholder="Search by model, category, or feature..."
            />
          </label>

          {isSuggestionsOpen && searchSuggestions.length > 0 && (
            <ul className="search-suggestions" role="listbox">
              {searchSuggestions.map((suggestion) => (
                <li key={suggestion}>
                  <button
                    type="button"
                    className="suggestion-item"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => handleSuggestionSelect(suggestion)}
                  >
                    {suggestion}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="filter-controls">
          <div className="filter-row">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={selectedCategory === category ? 'chip active' : 'chip'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <select
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
            className="sort-select"
          >
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
          </select>
        </div>
      </div>

      <div className="vehicle-grid">
        {filteredVehicles.length > 0 ? (
          filteredVehicles.map((vehicle) => <VehicleCard key={vehicle.slug} vehicle={vehicle} />)
        ) : (
          <div className="empty-state">No vehicles match your search.</div>
        )}
      </div>
    </section>
  )
}
