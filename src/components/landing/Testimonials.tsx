const testimonials = [
  {
    quote: "This platform has completely transformed how we manage our permits. It's a game-changer!",
    author: "Sarah Chen",
    role: "Owner, The Daily Grind Cafe",
  },
  {
    quote: "The automated reminders have saved us from costly permit lapses multiple times.",
    author: "Michael Rodriguez",
    role: "Operations Manager, Brooklyn Coffee Co.",
  },
  {
    quote: "The best investment we've made for our compliance management.",
    author: "Emily Thompson",
    role: "Director, NYC Coffee Chain",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Trusted by NYC's Best Cafes
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <p className="mb-4 text-gray-600">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;