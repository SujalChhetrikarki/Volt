import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Vehicles from './pages/Vehicles'
import VehicleDetails from './pages/VehicleDetails'
import Technology from './pages/Technology'
import Offers from './pages/Offers'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import vehicles from './data/vehicles.json'

function App() {
  return (
    // BrowserRouter lets the app change pages without refreshing the browser.
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />

        <main className="page-content">
          <Routes>
            {/* Home page */}
            <Route path="/" element={<Home vehicles={vehicles} />} />
            {/* Vehicle listing page */}
            <Route path="/vehicles" element={<Vehicles vehicles={vehicles} />} />
            {/* Individual vehicle details page */}
            <Route path="/vehicles/:slug" element={<VehicleDetails vehicles={vehicles} />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all route for missing pages */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
