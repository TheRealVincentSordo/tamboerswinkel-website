export default function MenuHighlights() {
  const menuItems = [
    {
      name: 'Croissant French Toast',
      description: 'Buttery croissants transformed into golden French toast, served with seasonal berries and maple syrup',
      price: 'R 95',
      image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Artisan Charcuterie Board',
      description: 'Curated selection of cured meats, artisanal cheeses, olives, and house-made preserves',
      price: 'R 185',
      image: 'https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Caprese Focaccia',
      description: 'House-baked focaccia with heirloom tomatoes, buffalo mozzarella, basil, and aged balsamic',
      price: 'R 110',
      image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Signature Flat White',
      description: 'Velvety microfoam meets our carefully sourced single-origin espresso',
      price: 'R 42',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Roasted Vegetable Tart',
      description: 'Seasonal vegetables with goat cheese and fresh herbs in a buttery pastry shell',
      price: 'R 105',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Lemon Olive Oil Cake',
      description: 'Moist almond cake with citrus glaze, served with crème fraîche and candied lemon',
      price: 'R 75',
      image: 'https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="menu" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
            Menu highlights
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-4"></div>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            A taste of what awaits you—each dish crafted with care and the finest ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif text-stone-800">
                    {item.name}
                  </h3>
                  <span className="text-amber-700 font-medium">{item.price}</span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-stone-600 italic">
            Menu changes with the seasons and the inspiration of the day
          </p>
        </div>
      </div>
    </section>
  );
}
