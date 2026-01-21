import React from "react";

const facilities = [
  {
    title: "Physics Lab",
    img: "/images/facility-physicslab.jpg",
    desc: "The Physics lab is equipped with sufficient apparatus required by students in various experiments and for their extended experimentation in projects.",
  },
  {
    title: "Chemistry Lab",
    img: "/images/facility-chemistrylab.jpg",
    desc: "The Chemistry lab is well equipped with apparatus and chemicals as prescribed in CBSE curriculum. Designed with safety and ventilation standards.",
  },
  {
    title: "Biology Lab",
    img: "/images/facility-biolab.jpg",
    desc: "Biology lab provides hands-on experience with precision instruments, charts, and models making learning effective and engaging.",
  },
  {
    title: "Computer Lab & Audio Visual Aids",
    img: "/images/facility-computerlab.jpg",
    desc: "The school has a multimedia lab with LCD projectors and modern systems to meet IT-era learning needs.",
  },
  {
    title: "School Library",
    img: "/images/facility-library.jpg",
    desc: "The library houses a wide collection of books, digital resources, and internet access fostering lifelong learning habits.",
  },
  {
    title: "Transport Facilities",
    img: "/images/facility-transport.jpg",
    desc: "The school provides comfortable bus facilities with escorts on duty for safe transportation.",
  },
  {
    title: "Smart Classroom",
    img: "/images/facility-smartclass.jpg",
    desc: "Smart Boards enable interactive learning and help teachers integrate multimedia resources effectively.",
  },
  {
    title: "School Playground",
    img: "/images/facility-playground.jpg",
    desc: "Lush green grounds for sports, skating rink, badminton court, gymnasium, and athletic track.",
  },
];

export default function Infrastructure() {
  return (
    <div className="home_version_02 bg-gray-50">
      {/* ===== Blue Header (bg-primary) ===== */}
      <div className="bg-[#337ab7] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-10 text-center">
            <h2 className="text-3xl font-semibold mb-2">Facilities</h2>
            <p className="text-sm">
              <a href="/" className="hover:underline">
                Home
              </a>{" "}
              <span className="mx-2">›</span>
              <a href="#" className="hover:underline">
                Infrastructure
              </a>{" "}
              <span className="mx-2">›</span>
              <span className="opacity-80">Facilities</span>
            </p>
          </div>
        </div>
      </div>

      {/* ===== Facilities Grid ===== */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow hover:shadow-xl transition overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-56 object-cover hover:scale-110 transition duration-300"
                  />
                </div>

                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
