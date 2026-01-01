import { useState } from "react";

const classes = [
  {
    title: "The Angry Child",
    category: "science",
    fee: "80.33৳",
    img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/class-img-2.jpg",
    level: "Intermediate",
    duration: "45 : 55",
  },
  {
    title: "Like Nastya Healthy Food",
    category: "science",
    fee: "Free",
    img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/img-4.jpg",
    level: "Intermediate",
    duration: "13 : 20",
  },
  {
    title: "Child Psychology Learning",
    category: "psychology",
    fee: "320.00৳",
    img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/img-2.jpg",
    level: "Intermediate",
    duration: "30 : 45",
  },
  {
    title: "Children with Disabilities",
    category: "babysitters",
    fee: "Free",
    img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/img-1.jpg",
    level: "Intermediate",
    duration: "40 : 55",
  },
  {
    title: "Special Child Education",
    category: "babysitters",
    fee: "Free",
    img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/class-img-10.jpg",
    level: "Intermediate",
    duration: "40 : 25",
  },
  {
    title: "Kids Intelligent Children",
    category: "babysitters",
    fee: "75.00৳",
    img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/class-img-11.jpg",
    level: "Intermediate",
    duration: "12 : 30",
  },
  {
    title: "Programming For Kids",
    category: "programming",
    fee: "30.00৳",
    img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/img-5.jpg",
    level: "Beginner",
    duration: "16 : 15",
  },
];

const categories = [
  "all",
  "science",
  "programming",
  "psychology",
  "babysitters",
];

export default function PopularClasses() {
  const [filter, setFilter] = useState("all");

  const filteredClasses =
    filter === "all" ? classes : classes.filter((c) => c.category === filter);

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">Our Popular Classes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here is what you can expect from a house cleaning from a Handy
            professional. Download the app to share further cleaning details and
            instructions!
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 flex-wrap mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border transition ${
                filter === cat
                  ? "bg-green-500 text-white border-green-500"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat === "all"
                ? "See All"
                : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredClasses.map((item, i) => (
            <div key={i} className="bg-white shadow rounded-xl overflow-hidden">
              {/* Image */}
              <div className="relative">
                <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  {item.fee}
                </span>
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Before you are authorized to submit a course for publication
                  on Kidba.
                </p>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>{item.level}</span>
                  <span>{item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See more */}
        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition">
            See More Classes
          </button>
        </div>
      </div>
    </section>
  );
}
