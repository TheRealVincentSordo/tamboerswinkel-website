import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Offerings from './components/Offerings';
import MenuHighlights from './components/MenuHighlights';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Location from './components/Location';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Offerings />
      <MenuHighlights />
      <Experience />
      <Gallery />
      <Location />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
