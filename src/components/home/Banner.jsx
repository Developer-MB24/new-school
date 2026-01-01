import { useEffect, useState } from "react";

const words = ["Kids", "Child", "Youth"];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="bg-cover bg-bottom flex items-center min-h-[850px] px-6"
      style={{
        backgroundImage:
          "url('https://kidbawp.codebasket.net/wp-content/uploads/2024/03/banner-bg-1.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <h3 className="text-white text-[29px] mb-3">A New Approach to</h3>

          <h1 className="flex gap-5 text-white text-[66px] leading-tight font-medium mb-5">
            <span className="block">Study Of</span>
            <span className="text-green-400 transition-all duration-500">
              {words[index]}
            </span>
          </h1>

          <p className="text-white text-xl mb-10">
            We provide best solutions for a Clean Environment If you need any
            <br className="hidden md:block" /> help in cleaning or maintenance.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition"
            >
              Admission Now
            </a>

            <a
              href="/courses"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Our Classes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
