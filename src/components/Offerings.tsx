import { Coffee, Sandwich, Wine, ShoppingBasket } from 'lucide-react';

export default function Offerings() {
  const offerings = [
    {
      icon: Coffee,
      title: 'Coffee & Breakfast',
      description:
        'Start your day with artisanal coffee, fresh pastries, and hearty breakfast dishes that set the right tone.',
      image: 'https://images.pexels.com/photos/1233528/pexels-photo-1233528.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Sandwich,
      title: 'Fresh Deli & Sandwiches',
      description:
        'Handcrafted sandwiches, seasonal salads, and daily deli specials made with the finest local ingredients.',
      image: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Wine,
      title: 'Wine Bar & Evenings',
      description:
        'Curated wine selection, artisanal charcuterie boards, and small plates perfect for intimate evenings.',
      image: 'https://images.pexels.com/photos/1682345/pexels-photo-1682345.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: ShoppingBasket,
      title: 'Specialty Grocer',
      description:
        'Take home our carefully selected pantry essentials, local produce, and artisanal products.',
      image: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="offerings" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
            What we offer
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="group cursor-pointer overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <offering.icon className="w-8 h-8 mb-2" />
                  <h3 className="text-2xl font-serif">{offering.title}</h3>
                </div>
              </div>
              <div className="p-6 bg-stone-50">
                <p className="text-stone-600 leading-relaxed">
                  {offering.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
