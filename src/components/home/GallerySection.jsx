import { useState } from "react";

const images = [
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img.jpg",
    title: "Yvonne Goodwin",
    category: "painting",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-1.jpg",
    title: "Ernest Nichols",
    category: "painting",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-2.jpg",
    title: "Kristine Underwood",
    category: "painting",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-3.jpg",
    title: "Darren Hansen",
    category: "painting",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-4.jpg",
    title: "Max Warner",
    category: "painting",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-5.jpg",
    title: "Yvonne Goodwin",
    category: "painting",
  },

  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-6.jpg",
    title: "Yvonne Goodwin",
    category: "study",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-7.jpg",
    title: "Ernest Nichols",
    category: "study",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-8.jpg",
    title: "Yvonne Goodwin",
    category: "study",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-9.jpg",
    title: "Ernest Nichols",
    category: "study",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-10.jpg",
    title: "Kristine Underwood",
    category: "study",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-11.jpg",
    title: "Darren Hansen",
    category: "study",
  },

  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-12.jpg",
    title: "Yvonne Goodwin",
    category: "photography",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-13.jpg",
    title: "Ernest Nichols",
    category: "photography",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-14.jpg",
    title: "Max Warner",
    category: "photography",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-15.jpg",
    title: "Yvonne Goodwin",
    category: "photography",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-16.jpg",
    title: "Ernest Nichols",
    category: "photography",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-17.jpg",
    title: "Yvonne Goodwin",
    category: "photography",
  },

  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-18.jpg",
    title: "Yvonne Goodwin",
    category: "writing",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-19.jpg",
    title: "Ernest Nichols",
    category: "writing",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-20.jpg",
    title: "Kristine Underwood",
    category: "writing",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-21.jpg",
    title: "Darren Hansen",
    category: "writing",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-22.jpg",
    title: "Yvonne Goodwin",
    category: "writing",
  },
  {
    src: "https://kidbawp.codebasket.net/wp-content/uploads/2023/04/hemal-img-23.jpg",
    title: "Ernest Nichols",
    category: "writing",
  },
];

const categories = ["all", "painting", "study", "photography", "writing"];

export default function GallerySection() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  const visibleImages = showAll ? filteredImages : filteredImages.slice(0, 6);

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold mb-4">Our School Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here is what you can expect from a house cleaning from a Handy
            professional. Download the app to share further cleaning details and
            instructions!
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-6 mb-16 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setShowAll(false);
              }}
              className={`border-b-2 pb-2 transition ${
                filter === cat
                  ? "border-green-500 text-green-500"
                  : "border-transparent text-gray-600 hover:text-green-500"
              }`}
            >
              {cat === "all"
                ? "Show all"
                : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleImages.map((img, i) => (
            <div
              key={i}
              className="relative group cursor-pointer"
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt=""
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white rounded-xl">
                <img
                  src="https://kidbawp.codebasket.net/wp-content/themes/kidba/assets/images/expand.png"
                  alt=""
                  className="w-10 mb-3"
                />
                <h3 className="text-lg font-semibold">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        {!showAll && filteredImages.length > 6 && (
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAll(true)}
              className="px-10 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition"
            >
              View All Photos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="" className="max-w-[90%] max-h-[90%]" />
        </div>
      )}
    </section>
  );
}
