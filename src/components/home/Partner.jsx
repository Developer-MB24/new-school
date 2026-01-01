const partners = [
  "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/partner-logo-2.jpg",
  "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/partner-logo-1.jpg",
  "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/partner-logo-3.jpg",
  "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/partner-logo-4.jpg",
  "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/partner-logo-5.jpg",
];

export default function Partner() {
  return (
    <section className="py-20 px-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          <div className="flex gap-12 animate-partner-scroll hover:[animation-play-state:paused] w-max">
            {[...partners, ...partners].map((logo, i) => (
              <div key={i} className="w-48 flex-shrink-0">
                <img
                  src={logo}
                  alt="Partner"
                  className="w-full object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
