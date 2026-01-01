export default function StaffSection() {
  const staff = [
    {
      name: "Broklyn Doel",
      role: "Science Teacher",
      img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/staff-1.jpg",
    },
    {
      name: "Alex Jhonson",
      role: "Art Teacher",
      img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/staff-2-1.jpg",
    },
    {
      name: "Janaton Doe",
      role: "English Teacher",
      img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/staff-3-1.jpg",
    },
    {
      name: "Robot Jhonson",
      role: "Math Teacher",
      img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/staff-4.jpg",
    },
  ];

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Meet Our Staffs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here is what you can expect from a house cleaning from a Handy
            professional. Download the app to share further cleaning details and
            instructions!
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {staff.map((person, i) => (
            <div key={i} className="bg-white shadow rounded-xl overflow-hidden">
              {/* Image */}
              <div className="relative group">
                <img
                  src={person.img}
                  alt=""
                  className="w-full h-72 object-cover"
                />

                {/* Social overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                  >
                    +
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center"
                  >
                    f
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center"
                  >
                    t
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center"
                  >
                    i
                  </a>
                </div>
              </div>

              {/* Text */}
              <div className="p-6 text-center">
                <h5 className="text-lg font-semibold">{person.name}</h5>
                <p className="text-gray-500 text-sm">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
