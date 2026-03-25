import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-12">
          <div>
            <h3 className="text-2xl font-serif text-white mb-4">
              Tamboerswinkel
            </h3>
            <p className="text-sm leading-relaxed">
              A neighborhood gathering place where coffee, food, and wine bring
              people together. Rooted in Cape Town, inspired by European café
              culture.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('menu');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('visit');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Visit Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Stay Connected</h4>
            <p className="text-sm mb-4">
              Follow us for daily specials, events, and glimpses of café life
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@tamboerswinkel.co.za"
                className="hover:text-amber-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Tamboerswinkel. Crafted with care
            in Cape Town.
          </p>
        </div>
      </div>
    </footer>
  );
}
