export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
          Your neighborhood café, deli & wine bar
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
          Coffee. Fresh food. Good wine. A place to slow down.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('menu')}
            className="bg-white text-stone-800 px-8 py-4 rounded-sm hover:bg-stone-100 transition-all transform hover:scale-105"
          >
            View Menu
          </button>
          <button
            onClick={() => scrollToSection('visit')}
            className="border-2 border-white text-white px-8 py-4 rounded-sm hover:bg-white hover:text-stone-800 transition-all transform hover:scale-105"
          >
            Book a Table
          </button>
        </div>
      </div>
    </section>
  );
}
