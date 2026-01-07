export default function AboutSection() {
  return (
    <section
      className="w-full py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://kidbawp.codebasket.net/wp-content/uploads/2023/03/about-bg-2.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              About Kindergarten School
            </h2>

            <p className="text-white/90 mb-10 leading-relaxed">
              Enthusiastically dominate competitive opportunities through
              transparent and action. Compellingly seize and virschemas through
              intermandated creative idea sources. Enthusiastically plagiarize
              client-centered relationships.
            </p>

            <a
              href="https://kidbawp.codebasket.net/student-registration/"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-md transition"
            >
              Admission Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
