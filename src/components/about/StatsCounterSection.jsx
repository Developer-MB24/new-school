import { useEffect, useState } from "react";

const counters = [
  {
    img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/feat-icon-9.png",
    value: 3500,
    label: "Students Enrolled",
  },
  {
    img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/counter-icon-6-1.png",
    value: 912,
    label: "Best Awards Won",
  },
  {
    img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/counter-icon-7-1.png",
    value: 370,
    label: "Classes Completed",
  },
  {
    img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/feat-icon-8.png",
    value: 648,
    label: "Our Total Courses",
  },
];

function AnimatedNumber({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = 20;
    const increment = Math.ceil(target / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}</span>;
}

export default function StatsCounterSection() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage:
          "url('https://kidbawp.codebasket.net/wp-content/uploads/2023/03/counter-bg-2.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-white">
          {counters.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-10">
                <img
                  src={item.img}
                  alt=""
                  className="w-20 h-20 object-contain"
                />
              </div>

              <h2 className="text-4xl font-bold mb-3">
                <AnimatedNumber target={item.value} />
              </h2>

              <p className="text-lg font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
