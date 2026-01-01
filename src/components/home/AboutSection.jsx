export default function AboutSection() {
  return (
    <>
      {/* About Section Specific CSS */}
      <style>{`
        /* Shared Elementor styles */

        /* Button hover */
        .cb-btn-one:hover {
          color: #fff;
          background: #126d63;
        }

        .cb-btn-two:hover {
          color: #fff;
        }

        .cb-btn-two::after:hover {
          background: #126d63;
        }

        /* Section paddings */
        .banner-section {
          padding: 100px 0 110px;
        }

        /* About section background */
        .about-bg {
          background-image: url("https://kidbawp.codebasket.net/wp-content/uploads/2023/03/about-bg-1.png");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          padding: 119px 0 120px;
        }

        /* About text colors */
        .about-title,
        .about-text,
        .about-list,
        .about-btn {
          color: #ffffff;
        }
      `}</style>

      <section className="about-bg w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-end">
            <div className="w-full sm:w-full md:w-4/5 lg:w-2/3 xl:w-1/2">
              <h2 className="about-title text-4xl font-semibold mb-8">
                About Kindergarten School
              </h2>

              <p className="about-text font-semibold mb-4">
                Enthusiastically dominate competitive opportunities through
                transparent and compellingly seize and environments through
                intermediated.
              </p>

              <p className="about-text mb-10 leading-relaxed">
                Enthusiastically dominate competitive opportunities through
                transparent and action compellingly seize and environments
                through intermediated creative idea sources enthusiastically
                plagiarize client-centered and relationships.
              </p>

              <div className="space-y-4 mb-14">
                <div className="about-list flex gap-3">
                  ✔ Donec facilisis aliquet ultrices. Cras ut ultricies.
                </div>
                <div className="about-list flex gap-3">
                  ✔ Fusce euismod at massa eget blandit quisque.
                </div>
              </div>

              <a
                href="https://kidbawp.codebasket.net/student-registration/"
                className="about-btn cb-btn-one inline-block bg-green-500 px-10 py-4 rounded-full font-semibold transition"
              >
                ADMISSION NOW
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
