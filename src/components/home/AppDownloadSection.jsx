import { useEffect, useState } from "react";

export default function AppDownloadSection() {
  const words = ["IOS App", "Android App"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <h2 className="text-4xl font-semibold mb-6">
            Join Our <span className="text-green-500">{words[index]}</span>
          </h2>

          <p className="text-gray-600 mb-10 leading-relaxed">
            Nam vestibulum at est a mollis. Phasellus sit amet tincidunt diam.
            Maecenas ultricies volutpat ornare. Sed quis enim nisi. Donec in dui
            placerat tellus dictum mollis.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:scale-105 transition">
              <img
                src="https://kidbawp.codebasket.net/wp-content/uploads/2023/03/appstore.png"
                alt="App Store"
                className="h-14"
              />
            </a>
            <a href="#" className="hover:scale-105 transition">
              <img
                src="https://kidbawp.codebasket.net/wp-content/uploads/2023/03/playstore.png"
                alt="Play Store"
                className="h-14"
              />
            </a>
          </div>
        </div>

        {/* Right */}
        <div>
          <img
            src="https://kidbawp.codebasket.net/wp-content/uploads/2023/03/app-download-img-1.jpg"
            alt="App preview"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
