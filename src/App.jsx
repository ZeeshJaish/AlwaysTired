import Hero from './components/Hero'
import MarqueeBanner from './components/MarqueeBanner'
import ComparisonSection from './components/ComparisonSection'
import FlavorCards from './components/FlavorCards'
import ManifestoStrip from './components/ManifestoStrip'
import BrandStory from './components/BrandStory'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full min-h-screen bg-brand-offwhite">
      <Hero />
      <MarqueeBanner />
      <ComparisonSection />
      <FlavorCards />
      <ManifestoStrip />
      <BrandStory />
      <Footer />
    </div>
  )
}

export default App
