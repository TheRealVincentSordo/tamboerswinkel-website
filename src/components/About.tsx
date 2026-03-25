export default function About() {
  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
            A local gem in the heart of Cape Town
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-8"></div>
        </div>

        <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
          <p>
            Tamboerswinkel is more than a café—it's a daily ritual, a gathering place,
            a neighborhood heartbeat. Tucked away in Cape Town, we've created a space
            where mornings begin with the aroma of freshly brewed coffee and warm pastries,
            afternoons unfold over handcrafted sandwiches, and evenings are savored with
            a glass of carefully selected wine.
          </p>
          <p>
            We believe in the beauty of slowing down. In sourcing quality ingredients
            from local producers. In creating moments that matter—whether it's a quiet
            espresso at the counter, a leisurely lunch with a friend, or an evening
            spent exploring our curated wine selection alongside artisanal charcuterie.
          </p>
          <p>
            Every detail is intentional. Every offering is chosen with care. This is
            where European café culture meets Cape Town warmth, where good food and
            good company come together naturally.
          </p>
        </div>
      </div>
    </section>
  );
}
