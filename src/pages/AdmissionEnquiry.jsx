import React from "react";

export default function AdmissionEnquiry() {
  return (
    <div className="contact bg-gray-50">
      {/* ===== Header / Banner ===== */}
      <header className="relative h-[360px] bg-[url('/images/banner-bg.jpg')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative container mx-auto h-full flex items-center justify-center text-center px-4">
          <div className="intro-text text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Admission Enquiry
            </h2>
            <p className="text-sm">
              <a href="/" className="hover:text-yellow-400 transition">
                Home
              </a>{" "}
              <span className="mx-2">›</span>
              <span className="text-white/80">Admission Enquiry</span>
            </p>
          </div>
        </div>
      </header>

      {/* ===== Content Section ===== */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* ===== Left Content ===== */}
            <div className="md:col-span-6 text-gray-700 space-y-4 text-justify">
              <p>
                Are you looking for an affordable school with a high-quality
                CBSE curriculum and excellent infrastructure? Look no further
                than Bloom International School in Noida Extension.
              </p>

              <p>
                At Bloom International School, we follow the CBSE curriculum,
                which is recognized for its rigor and high standards. Our
                teachers provide a student-centered approach to learning.
              </p>

              <p>
                In addition to our outstanding academic program, we also offer
                the best infrastructure and facilities. Our classrooms are
                spacious, modern, and well-equipped.
              </p>

              <p>
                We believe that top-quality education should be accessible to
                all, regardless of financial background.
              </p>

              <p>
                Join us today and learn more about our{" "}
                <a
                  href="/contact"
                  className="text-yellow-500 font-medium hover:underline"
                >
                  admission process
                </a>
                .
              </p>
            </div>

            {/* ===== Spacer ===== */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* ===== Right Form ===== */}
            <div className="md:col-span-5 bg-white shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Admission Enquiry</h2>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Student Name *"
                    className="border px-4 py-2 w-full focus:border-yellow-400 outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Guardian Name *"
                    className="border px-4 py-2 w-full focus:border-yellow-400 outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Mobile *"
                    className="border px-4 py-2 w-full focus:border-yellow-400 outline-none"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    className="border px-4 py-2 w-full focus:border-yellow-400 outline-none"
                    required
                  />
                </div>

                <textarea
                  rows="5"
                  placeholder="Your Query"
                  className="border px-4 py-2 w-full focus:border-yellow-400 outline-none"
                ></textarea>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="bg-yellow-400 text-white px-6 py-2 uppercase text-sm font-medium hover:bg-yellow-500 transition"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="bg-gray-800 text-white px-6 py-2 uppercase text-sm font-medium hover:bg-gray-900 transition"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Procedure For Admission Section ===== */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* ===== Right Content (Main) ===== */}
            <div className="lg:col-span-9 space-y-10">
              {/* Admission Procedure */}
              <div>
                <h3 className="text-2xl font-semibold border-b pb-2 relative">
                  Procedure For Admission
                  <span className="absolute left-0 bottom-0 w-24 h-[2px] bg-yellow-400"></span>
                </h3>

                <div className="flex flex-col md:flex-row gap-8 mt-6">
                  <ul className="space-y-4 font-medium">
                    {["Pre Nursery", "Nursery", "Kindergarten", "First"].map(
                      (item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 border-b border-dashed pb-2"
                        >
                          <img
                            src="/images/icon-kid.png"
                            alt=""
                            className="w-5 h-5"
                          />
                          {item}
                        </li>
                      ),
                    )}
                  </ul>

                  <ul className="space-y-4 font-semibold">
                    {[
                      "3+ Years",
                      "4+ Years",
                      "5+ Years",
                      "6+ Years Onwards",
                    ].map((age, i) => (
                      <li
                        key={i}
                        className="border-b border-dashed pb-2 text-gray-700"
                      >
                        {age}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Age & Documents */}
              <div className="bg-gray-100 p-5 rounded">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400">✔</span>
                    <b>Age as on 1st April of the Academic Session</b>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400">✔</span>
                    <b>Documents required at the time of Form Submission</b>
                  </li>
                </ul>
              </div>

              {/* Documents Required */}
              <div>
                <h3 className="text-xl font-semibold border-b pb-2 relative">
                  Documents required at the time of Form Submission
                  <span className="absolute left-0 bottom-0 w-32 h-[2px] bg-yellow-400"></span>
                </h3>

                <ul className="mt-4 space-y-3">
                  {[
                    "Birth Certificate issued by appropriate authorities.",
                    "Immunization Certificate of B.C.G., M.M.R., D.P.T. and Polio.",
                    "Passport size photographs of child and parents.",
                    "Residential Proof, photocopy of Pan card/Voter ID.",
                  ].map((doc, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 bg-gray-100 p-3"
                    >
                      <span className="text-yellow-400">✔</span>
                      <b>{doc}</b>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other Classes */}
              <div className="bg-white shadow p-6">
                <h3 className="text-xl font-semibold mb-2">
                  FOR ADMISSIONS TO OTHER CLASSES
                </h3>
                <p className="text-gray-600 mb-4">
                  Admission to other classes is done if vacancies exist and the
                  students seeking admissions pass the admission test.
                </p>

                <h4 className="font-semibold mb-2">DOCUMENTS REQUIRED:</h4>

                <ul className="space-y-3">
                  {[
                    "Transfer Certificate counter signed by the Inspector of School of the Area.",
                    "A copy of the Progress Report from the previous school.",
                    "Residential Proof.",
                  ].map((doc, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 bg-gray-100 p-3"
                    >
                      <span className="text-yellow-400">✔</span>
                      <b>{doc}</b>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ===== Left Sidebar Contact ===== */}
            <div className="lg:col-span-3">
              <div className="text-center bg-white shadow p-4">
                <img
                  src="/images/img-contact.jpg"
                  alt="Contact"
                  className="w-full border p-2 shadow-sm"
                />

                <h3 className="text-xl font-semibold mt-4 border-b pb-2 relative">
                  Contact Info
                  <span className="absolute left-0 bottom-0 w-16 h-[2px] bg-yellow-400"></span>
                </h3>

                <p className="text-sm mt-3">
                  bloominternationalschool@gmail.com
                </p>
                <p className="text-sm">+91 9891399253</p>

                <div className="flex justify-center gap-3 mt-4">
                  {["facebook", "twitter", "linkedin"].map((s, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-yellow-400 hover:text-white transition"
                    >
                      <i className={`fa fa-${s}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Fee Structure Section (BOTTOM) ===== */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1">
            {/* Heading */}
            <div className="mb-6">
              <h1 className="text-[22px] font-semibold mb-2">
                Schools in Noida Extension with Fee Structure
              </h1>
              <p className="text-gray-600">
                Here we provide the details for fee structure so that anyone can
                check the fees criteria and fee payment schedule.
              </p>
            </div>

            {/* Sub Heading */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold border-b pb-2 relative">
                School Fees is payable Quarterly at the accounts section of the
                school as per schedule given below
                <span className="absolute left-0 bottom-0 w-40 h-[2px] bg-yellow-400"></span>
              </h3>
            </div>

            {/* Quarter Schedule Box */}
            <div className="bg-white shadow p-6 mb-8">
              <ul className="space-y-3 font-bold">
                {[
                  {
                    q: "1st Quarter (April, May, June)",
                    d: "By 10th April",
                  },
                  {
                    q: "2nd Quarter (July, Aug, Sep)",
                    d: "By 10th July",
                  },
                  {
                    q: "3rd Quarter (Oct, Nov, Dec)",
                    d: "By 10th October",
                  },
                  {
                    q: "4th Quarter (Jan, Feb, Mar)",
                    d: "By 10th January",
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center bg-gray-100 p-3 border-b"
                  >
                    <span>{item.q}</span>
                    <span className="text-gray-700">{item.d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notes / Rules */}
            <div className="bg-white shadow p-6">
              <ul className="space-y-4 text-gray-700 list-disc list-inside">
                <li>
                  Fee may be deposited from 1st to 10th of the first month of
                  the quarter in which the fees become payable. Thereafter
                  school fee will be accepted with a late fee of Rs. 20 per day.
                </li>

                <li>
                  The timings to deposit the fees is 8:00 am to 1:00 pm (Monday
                  to Saturday).
                </li>

                <li>
                  Tuition fee, admission fee and other charges are subject to
                  revision and will be charged as directed by the school
                  management from time to time.
                </li>

                <li>
                  If all dues are not cleared by the end of the session, the
                  student’s result will be withheld.
                </li>

                <li>
                  Transport charges (as applicable) are payable along with
                  school fee and transport facility won’t be discontinued in
                  mid-session.
                </li>

                <li>
                  Parents who opt to deposit the fees for the whole term at the
                  beginning of the first quarter will be offered{" "}
                  <b>10% rebate</b> on the total fees.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
