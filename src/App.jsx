import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import TargetAudience from './components/TargetAudience'
import WhyChooseUs from './components/WhyChooseUs'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TargetAudience />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
