export default function CTASection() {
  return (
    <section
      className="relative py-32 flex items-center justify-center"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-stone-900 bg-opacity-70"></div>

      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
          Come by for coffee.
          <br />
          Stay for wine.
        </h2>
        <p className="text-xl mb-8 text-stone-200">
          Your table is waiting
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.google.com/maps/search/cape+town+cafe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-stone-800 px-8 py-4 rounded-sm hover:bg-stone-100 transition-all transform hover:scale-105 inline-block"
          >
            Visit Us
          </a>
          <a
            href="https://www.google.com/maps/search/cape+town+cafe"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 rounded-sm hover:bg-white hover:text-stone-800 transition-all transform hover:scale-105 inline-block"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
