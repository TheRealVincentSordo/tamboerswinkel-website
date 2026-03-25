import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section id="visit" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
            Visit us
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif text-stone-800 mb-2">
                  Location
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  123 Bree Street
                  <br />
                  Cape Town City Centre
                  <br />
                  Cape Town, 8001
                  <br />
                  South Africa
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif text-stone-800 mb-2">
                  Opening Hours
                </h3>
                <div className="text-stone-600 space-y-1">
                  <p>Monday - Friday: 7:00 AM - 10:00 PM</p>
                  <p>Saturday: 8:00 AM - 10:00 PM</p>
                  <p>Sunday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif text-stone-800 mb-2">Phone</h3>
                <p className="text-stone-600">+27 21 123 4567</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif text-stone-800 mb-2">Email</h3>
                <p className="text-stone-600">hello@tamboerswinkel.co.za</p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://www.google.com/maps/search/cape+town+cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-700 text-white px-8 py-3 rounded-sm hover:bg-amber-800 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="h-96 md:h-full min-h-[400px] rounded-sm overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.6287193083867!2d18.418733!3d-33.924869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc676c0b6f1e45%3A0x3a7d1c0c0f0f1f0f!2sBree%20Street%2C%20Cape%20Town%20City%20Centre%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tamboerswinkel Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
