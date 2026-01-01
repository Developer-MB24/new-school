export default function WelcomeSection() {
  const features = [
    {
      title: "Active Learning",
      desc: "Since have been visionary reliable software engineering partner.",
      icon: "https://kidbawp.codebasket.net/wp-content/plugins/cb-core/assets/images/icons/feat-icon-1.png",
      gradient: "from-pink-500 to-orange-400",
    },
    {
      title: "Parents Day",
      desc: "Since have been visionary reliable software engineering partner.",
      icon: "https://kidbawp.codebasket.net/wp-content/plugins/cb-core/assets/images/icons/feat-icon-2.png",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Expert Teachers",
      desc: "Since have been visionary reliable software engineering partner.",
      icon: "https://kidbawp.codebasket.net/wp-content/plugins/cb-core/assets/images/icons/feat-icon-3.png",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      title: "Music Lessons",
      desc: "Since have been visionary reliable software engineering partner.",
      icon: "https://kidbawp.codebasket.net/wp-content/plugins/cb-core/assets/images/icons/feat-icon-4.png",
      gradient: "from-purple-500 to-fuchsia-400",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <h2 className="text-4xl font-semibold mb-6">Welcome to Our Kidba</h2>
          <p className="text-gray-600 mb-12 leading-relaxed">
            Here is what you can expect from a house cleaning from a Handy
            professional.
            <br />
            Download the app to share further cleaning!
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {features.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-14 h-14 drop-shadow-lg"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

                  <div
                    className={`h-1 w-14 rounded-full bg-gradient-to-r ${item.gradient} mb-4`}
                  ></div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <img
            src="https://kidbawp.codebasket.net/wp-content/uploads/2023/03/feature-img.jpg"
            alt="Feature"
            className="w-full rounded-xl shadow-xl"
          />

          <a
            href="#"
            className="absolute bottom-4 right-4 w-16 h-16 rounded-full flex items-center justify-center text-white bg-gradient-to-r from-pink-500 to-orange-400 shadow-lg hover:scale-105 transition"
          >
            ▶
          </a>
        </div>
      </div>
    </section>
  );
}
