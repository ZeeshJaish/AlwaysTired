import { useMemo, useState } from 'react'
import comparisonImage from './assets/campaign-comparison.png'
import studioImage from './assets/campaign-studio.png'
import duoSplashImage from './assets/campaign-duo-splash.png'
import purpleDetailImage from './assets/campaign-purple-detail.png'
import purpleCanImage from './assets/campaign-purple-can.png'
import redStageImage from './assets/campaign-red-stage.png'
import redCanImage from './assets/campaign-red-can.png'
import OfflinePage from './components/OfflinePage'
import useNetwork from './hooks/useNetwork'

const proofStats = [
  { value: '4g', label: 'sugar', detail: '10x less than mainstream soda.' },
  { value: '7g', label: 'fiber', detail: 'Prebiotic support for daily digestion.' },
  { value: '0', label: 'fake color drama', detail: 'No artificial colours or preservatives.' },
]

const productBenefits = [
  {
    title: 'Prebiotic Fiber',
    value: '7g',
    text: 'Feeds good gut bacteria and makes the health benefit easy to understand.',
  },
  {
    title: 'Low Sugar',
    value: '4g',
    text: 'Keeps the soda ritual without the heavy sugar spike.',
  },
  {
    title: 'Clean Focus',
    value: 'Green tea',
    text: 'Natural caffeine for study, work, reels, and the 3 PM crash zone.',
  },
  {
    title: 'Stress Support',
    value: 'Tulsi + Ashwagandha',
    text: 'Adaptogen powered, explained as calm energy instead of jargon.',
  },
]

const researchStats = [
  { number: '18', label: 'Gen Z respondents in Delhi NCR' },
  { number: '94%', label: 'instant brand-name recall' },
  { number: '15/18', label: 'rated cans shelf-worthy' },
  { number: '14/18', label: 'would switch if taste matched' },
]

const concepts = [
  { name: 'Prebiotic Sparkling Soda', score: 9, status: 'Selected' },
  { name: 'Adaptogen Sachet', score: 6, status: 'Online only' },
  { name: 'Cold-Brew Kombucha', score: 5, status: 'Premium niche' },
  { name: 'Electrolyte Water', score: 4, status: 'Weak difference' },
]

const journey = [
  'Instagram Reel',
  'Compare 40g vs 4g',
  'Pick Flavor',
  'DM Order',
  'Try Cold',
  'Share Story',
]

const flavors = [
  {
    id: 'red',
    name: 'The Grinder',
    flavor: 'Guava + Pear + Mint',
    image: redCanImage,
    backdrop: redStageImage,
    line: 'Sharp, fresh, focused. Built for the person who gets things done.',
    tags: ['Focused lift', 'Tropical spark', 'No excuses'],
    accent: '#ffef61',
  },
  {
    id: 'purple',
    name: 'The Overthinker',
    flavor: 'Passionfruit + Lime + Green Tea',
    image: purpleCanImage,
    backdrop: purpleDetailImage,
    line: 'Electric, deep, and made for the 3 PM rescue moment.',
    tags: ['Big brain sip', 'Clean caffeine', 'Night mode'],
    accent: '#73ffa9',
  },
]

function useTilt() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function onMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -10, y: px * 12 })
  }

  function onLeave() {
    setTilt({ x: 0, y: 0 })
  }

  return {
    style: { transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` },
    onMove,
    onLeave,
  }
}

function Nav() {
  return (
    <header className="site-nav">
      <a href="#top" className="brand-lockup">Always Tired</a>
      <nav aria-label="Campaign sections">
        <a href="#problem">Problem</a>
        <a href="#product">Product</a>
        <a href="#proof">Proof</a>
      </nav>
      <a className="nav-cta" href="https://instagram.com/alwaystired.in" target="_blank" rel="noreferrer">
        DM to Order
      </a>
    </header>
  )
}

function Hero() {
  const tilt = useTilt()

  return (
    <section id="top" className="hero-campaign">
      <div className="hero-bg" aria-hidden="true">
        <img src={duoSplashImage} alt="" />
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <h1>Always Tired</h1>
          <p>
            A prebiotic sparkling soda for young India. Low sugar, gut friendly, clean energy,
            and cool enough to hold like culture.
          </p>
          <div className="hero-actions">
            <a href="https://instagram.com/alwaystired.in" target="_blank" rel="noreferrer">DM to Order</a>
            <a href="#problem">See Why It Works</a>
          </div>
        </div>
        <div className="hero-product" onMouseMove={tilt.onMove} onMouseLeave={tilt.onLeave}>
          <div className="product-tilt" style={tilt.style}>
            <img src={duoSplashImage} alt="Always Tired red and purple cans with fruit splash" />
            <div className="glass-stat top">4g sugar</div>
            <div className="glass-stat bottom">7g prebiotic fiber</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Comparison() {
  return (
    <section id="problem" className="comparison-stage">
      <div className="section-copy">
        <h2>Regular soda is the villain. Always Tired is the switch.</h2>
        <p>
          One scroll should make the product obvious: the category is familiar, but the formula is smarter.
        </p>
      </div>
      <div className="comparison-card">
        <img src={comparisonImage} alt="Regular soda versus Always Tired nutrition comparison" />
      </div>
    </section>
  )
}

function ProblemStory() {
  return (
    <section className="problem-story">
      <div className="story-image">
        <img src={studioImage} alt="Always Tired cans on a design studio desk" />
      </div>
      <div className="story-copy">
        <h2>We didn’t start a brand. We fixed a daily habit.</h2>
        <p>
          Gen Z already knows sugar is a problem, but healthy drinks feel clinical, expensive, or boring.
          Always Tired turns the healthier choice into the cooler choice.
        </p>
        <div className="stat-stack">
          {proofStats.map((stat) => (
            <article key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <p>{stat.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductScience() {
  const [active, setActive] = useState(0)

  return (
    <section id="product" className="science-section">
      <div className="section-copy">
        <h2>Product science, translated into plain English.</h2>
        <p>No one buys a lecture. They buy a cold can that quickly explains why it is better.</p>
      </div>
      <div className="science-board">
        <div className="science-tabs" role="tablist" aria-label="Product benefits">
          {productBenefits.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={active === index ? 'active' : ''}
              onClick={() => setActive(index)}
              role="tab"
              aria-selected={active === index}
            >
              <span>{item.value}</span>
              {item.title}
            </button>
          ))}
        </div>
        <div className="science-detail">
          <h3>{productBenefits[active].title}</h3>
          <p>{productBenefits[active].text}</p>
          <div className="ingredient-ring" aria-hidden="true">
            {productBenefits.map((item, index) => (
              <span key={item.title} style={{ '--i': index }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FlavorShowcase() {
  const [activeId, setActiveId] = useState('red')
  const active = useMemo(() => flavors.find((item) => item.id === activeId), [activeId])
  const tilt = useTilt()

  return (
    <section className={`flavor-showcase ${active.id}`}>
      <div className="flavor-backdrop" aria-hidden="true">
        <img src={active.backdrop} alt="" />
      </div>
      <div className="flavor-copy">
        <h2>Meet the cans.</h2>
        <p>Two flavors, two personalities, one clear product promise.</p>
        <div className="flavor-switcher">
          {flavors.map((flavor) => (
            <button
              key={flavor.id}
              type="button"
              className={activeId === flavor.id ? 'active' : ''}
              onClick={() => setActiveId(flavor.id)}
            >
              {flavor.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flavor-stage" onMouseMove={tilt.onMove} onMouseLeave={tilt.onLeave}>
        <div className="flavor-card-3d" style={tilt.style}>
          <img src={active.image} alt={`${active.name} Always Tired can`} />
        </div>
        <div className="flavor-notes">
          <h3>{active.name}</h3>
          <strong>{active.flavor}</strong>
          <p>{active.line}</p>
          <div>
            {active.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}

function ResearchProof() {
  return (
    <section id="proof" className="proof-section">
      <div className="section-copy">
        <h2>Tested with Gen Z. Not guessed.</h2>
        <p>Research becomes part of the campaign, so the jury sees the process and customers see confidence.</p>
      </div>
      <div className="proof-grid">
        {researchStats.map((stat) => (
          <article key={stat.label}>
            <strong>{stat.number}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
      <div className="insight-strip">
        <span>Key insight</span>
        Lead with gut health and sugar comparison. Explain adaptogens only after interest is created.
      </div>
    </section>
  )
}

function ConceptBattle() {
  return (
    <section className="concept-battle">
      <div>
        <h2>Why this idea won.</h2>
        <p>
          The selected concept had the strongest overlap of feasibility, viability, and desirability.
        </p>
      </div>
      <div className="battle-bars">
        {concepts.map((concept) => (
          <article key={concept.name}>
            <div>
              <strong>{concept.name}</strong>
              <span>{concept.status}</span>
            </div>
            <div className="score-track">
              <span style={{ width: `${concept.score * 10}%` }} />
            </div>
            <b>{concept.score}/10</b>
          </article>
        ))}
      </div>
    </section>
  )
}

function Journey() {
  const [active, setActive] = useState(0)

  return (
    <section className="journey-section">
      <div className="section-copy">
        <h2>From attention to order.</h2>
        <p>The website itself follows the launch funnel: ad, explanation, proof, flavor, order.</p>
      </div>
      <div className="journey-rail">
        {journey.map((step, index) => (
          <button
            key={step}
            type="button"
            className={index === active ? 'active' : ''}
            onMouseEnter={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            {step}
          </button>
        ))}
      </div>
      <div className="journey-screen">
        <span>Step {String(active + 1).padStart(2, '0')}</span>
        <h3>{journey[active]}</h3>
        <p>
          {active < 2
            ? 'Create the reason to care before asking anyone to buy.'
            : active < 4
              ? 'Make the decision simple: compare, choose, DM.'
              : 'Turn first trial into social proof and repeat demand.'}
        </p>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="final-cta">
      <img src={redStageImage} alt="Always Tired red can with guava, pear, mint and splash" />
      <div>
        <h2>Fix your gut. Keep your vibe.</h2>
        <p>Delhi NCR first. Campus, gym, coworking, D2C next.</p>
        <a href="https://instagram.com/alwaystired.in" target="_blank" rel="noreferrer">DM @alwaystired.in</a>
      </div>
    </section>
  )
}

export default function App() {
  const isOnline = useNetwork()

  if (!isOnline) {
    return <OfflinePage />
  }

  return (
    <main className="campaign-page">
      <Nav />
      <Hero />
      <Comparison />
      <ProblemStory />
      <ProductScience />
      <FlavorShowcase />
      <ResearchProof />
      <ConceptBattle />
      <Journey />
      <FinalCta />
    </main>
  )
}
