import { FaPlus, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const staff = [
  {
    name: "Kidba Doel",
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

export default function StaffSection() {
  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Our Staffs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here is what you can expect from a house cleaning from a Handy
            professional. Download the app to share further cleaning details and
            instructions!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((person, i) => (
            <div
              key={i}
              className="group relative bg-white shadow-md overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img src={person.img} alt={person.name} className="w-full" />

                {/* Social buttons */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-white p-2 rounded-full text-gray-700 hover:bg-green-500 hover:text-white">
                    <FaPlus />
                  </button>
                  <button className="bg-white p-2 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white">
                    <FaFacebookF />
                  </button>
                  <button className="bg-white p-2 rounded-full text-gray-700 hover:bg-sky-500 hover:text-white">
                    <FaTwitter />
                  </button>
                  <button className="bg-white p-2 rounded-full text-gray-700 hover:bg-pink-500 hover:text-white">
                    <FaInstagram />
                  </button>
                </div>
              </div>

              {/* Text */}
              <div className="text-center py-6">
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
