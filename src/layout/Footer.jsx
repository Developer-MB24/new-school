export default function Footer() {
  return (
    <footer className="bg-[#0f3b37] text-white pt-20">
      {/* Top footer */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-16">
          {/* About */}
          <div>
            <h4 className="text-xl font-semibold mb-5">About Kidba</h4>
            <p className="text-white/80 leading-relaxed">
              Monotne deplos copertve chanva andng crorate Qhanin Unique
              Qnderwhe Premum Convere With Uheng Mutmed Cover
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-5">Services</h4>
            <ul className="space-y-3 text-white/80">
              {[
                "Overview",
                "Why us",
                "Awards & Recognitions",
                "Teacher",
                "Client Reviews",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-xl font-semibold mb-5">Information</h4>
            <ul className="space-y-3 text-white/80">
              {[
                "My account",
                "Order History",
                "Kids Study",
                "News",
                "Returns",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-5">
              Newsletter Subscription
            </h4>
            <p className="text-white/80 mb-4">
              Enter your email and get latest updates and offers subscribe us
            </p>

            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 rounded text-gray-800 focus:outline-none"
                required
              />
              <button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded transition">
                Subscribe Now!
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-[#0b2f2b] py-6 text-center text-white/70">
        <p>© 2025 Kidba Designed by CodeBasket</p>
      </div>
    </footer>
  );
}
