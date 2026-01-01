export default function FacilitiesSection() {
  const facilities = [
    {
      title: "Active Learning",
      text: "Since have been visionary reliable software engineering partner.",
      img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/a-1.jpg",
      icon: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/facility-icon-1-1.png",
    },
    {
      title: "Parents Day",
      text: "Since have been visionary reliable software engineering partner.",
      img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/b-1.jpg",
      icon: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/facility-icon-2-1.png",
    },
    {
      title: "Expert Teachers",
      text: "Since have been visionary reliable software engineering partner.",
      img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/c.jpg",
      icon: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/facility-icon-3.png",
    },
  ];

  return (
    <section
      className="py-28 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://kidbawp.codebasket.net/wp-content/uploads/2023/03/facility-bg.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl font-semibold mb-4">School Facilities</h2>
          <p className="opacity-80 max-w-2xl mx-auto">
            Here is what you can expect from a house cleaning from a Handy
            professional. Download the app to share further cleaning details and
            instruction.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg">
              {/* Image */}
              <div className="relative">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-56 object-cover rounded-t-xl"
                />

                {/* Icon */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-green-500 p-4 rounded-full shadow-xl z-10">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="pt-14 pb-8 px-6 text-center">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
