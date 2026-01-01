import { useEffect, useState } from "react";

const counters = [
  {
    label: "Students Enrolled",
    value: 3500,
    icon: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/counter-icon-1.png",
    offset: false,
  },
  {
    label: "Best Awards Won",
    value: 912,
    icon: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/counter-icon-2.png",
    offset: true,
  },
  {
    label: "Classes Completed",
    value: 370,
    icon: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/counter-icon-3.png",
    offset: false,
  },
  {
    label: "Our Total Courses",
    value: 648,
    icon: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/counter-icon-4.png",
    offset: true,
  },
];

function Counter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const stepTime = Math.max(10, Math.floor(duration / end));

    const timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toLocaleString()}</span>;
}

export default function CounterSection() {
  return (
    <section
      className="bg-cover bg-center py-28"
      style={{
        backgroundImage:
          "url('https://kidbawp.codebasket.net/wp-content/uploads/2023/03/counter-bg-1.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20 text-white">
          <h2 className="text-4xl font-semibold mb-4">
            Unique learning Environment
          </h2>
          <p className="opacity-80 max-w-2xl mx-auto">
            Here is what you can expect from a house cleaning from a Handy
            professional. Download the app to share further cleaning details and
            instructions!
          </p>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          {counters.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center ${
                item.offset ? "lg:mt-20" : ""
              }`}
            >
              <img
                src={item.icon}
                alt=""
                className="w-20 mb-6 drop-shadow-lg"
              />

              <h3 className="text-4xl font-bold text-white mb-3">
                <Counter value={item.value} />
              </h3>

              <p className="text-white opacity-80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
