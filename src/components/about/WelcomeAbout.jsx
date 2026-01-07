export default function WelcomeAbout() {
  const features = [
    {
      title: "Active Learning",
      img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/feat-icon-8.png",
      gradient: "from-pink-500 to-orange-400",
    },
    {
      title: "Parents Day",
      img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/feat-icon-10.png",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Expert Teachers",
      img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/feat-icon-9.png",
      gradient: "from-purple-500 to-indigo-400",
    },
    {
      title: "Music Lessons",
      img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/feat-icon-11.png",
      gradient: "from-green-500 to-lime-400",
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Kidba
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Here is what you can expect from a house cleaning from a Handy
            professional. Download the app to share further cleaning details and
            instructions!
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-5"
            >
              <div
                className={`w-24 h-24 mb-6 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-r ${item.gradient}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>

              <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full mb-4" />

              <p className="text-gray-500 text-sm">
                Since have been visionary reliable software engineering partner.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
