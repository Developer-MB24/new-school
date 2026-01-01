import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Amelia",
    text: "Praesent scelerisque, odio eu fermentum malesuada, nisi arcu volutpat nisl, sit amet convallis nunc turpis eget volutpat. Suspendisse potenti.",
    img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/testimonial-img-2.png",
  },
  {
    name: "Banjemee",
    text: "Praesent scelerisque, odio eu fermentum malesuada, nisi arcu volutpat nisl, sit amet convallis nunc turpis eget volutpat. Suspendisse potenti.",
    img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/testimonial-img-3.png",
  },
  {
    name: "Caroletee",
    text: "Praesent scelerisque, odio eu fermentum malesuada, nisi arcu volutpat nisl, sit amet convallis nunc turpis eget volutpat. Suspendisse potenti.",
    img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/testimonial-img-1.png",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="py-32 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://kidbawp.codebasket.net/wp-content/uploads/2023/03/testimonial-bg.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Client Images */}
          <div className="lg:col-span-4 flex justify-center">
            <img
              src={testimonials[index].img}
              alt={testimonials[index].name}
              className="w-64 h-64 object-contain transition-all duration-500"
            />
          </div>

          {/* Feedback */}
          <div className="lg:col-span-8 text-white">
            <div className="mb-8">
              <img
                src="https://kidbawp.codebasket.net/wp-content/themes/kidba/assets/images/quote.png"
                alt="quote"
                className="w-12 mb-6"
              />
              <h2 className="text-4xl font-semibold mb-6">Client Says?</h2>
            </div>

            <p className="text-lg leading-relaxed mb-8 max-w-2xl">
              “{testimonials[index].text}”
            </p>

            <div className="w-24 h-1 bg-white rounded-full mb-4"></div>

            <h4 className="text-xl font-semibold">
              {testimonials[index].name}
            </h4>

            {/* Dots */}
            <div className="flex gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === i ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
