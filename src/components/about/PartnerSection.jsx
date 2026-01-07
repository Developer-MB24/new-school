export default function PartnerSection() {
  const logos = [
    "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/partner-logo-2.jpg",
    "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/partner-logo-1.jpg",
    "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/partner-logo-3.jpg",
    "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/partner-logo-4.jpg",
    "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/partner-logo-5.jpg",
  ];

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-10 animate-partner-scroll">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[180px] px-6"
              >
                <img src={logo} alt="partner" className="h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
