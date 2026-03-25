export default function Experience() {
  return (
    <section className="py-24 bg-stone-800 text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              Why people come here
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-stone-300">
              <p>
                For <span className="text-amber-400 font-medium">slow mornings</span> with a perfect espresso
                and a flaky croissant, watching the neighborhood wake up.
              </p>
              <p>
                For <span className="text-amber-400 font-medium">casual lunches</span> where conversations
                flow as easily as the wine, and time feels unhurried.
              </p>
              <p>
                For <span className="text-amber-400 font-medium">evenings with friends</span>, sharing
                charcuterie, discovering new wines, and creating moments worth remembering.
              </p>
              <p>
                For the <span className="text-amber-400 font-medium">neighborhood energy</span>—familiar
                faces, genuine smiles, and the feeling that you're exactly where you\'re meant to be.
              </p>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-[500px] rounded-sm overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Café atmosphere"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
