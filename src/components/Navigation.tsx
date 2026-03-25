import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className={`text-2xl font-serif transition-colors ${
            isScrolled ? 'text-stone-800' : 'text-white'
          }`}
        >
          Tamboerswinkel
        </button>

        <div className="hidden md:flex gap-8">
          {['About', 'Offerings', 'Menu', 'Visit'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`transition-colors hover:text-amber-700 ${
                isScrolled ? 'text-stone-600' : 'text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-stone-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-stone-800' : 'text-white'} />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-4">
          {['About', 'Offerings', 'Menu', 'Visit'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full text-left px-6 py-4 text-stone-600 hover:bg-stone-50 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
