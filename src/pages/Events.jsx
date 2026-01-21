import React from "react";
import { FaClock } from "react-icons/fa";

const eventsData = [
  {
    grade: "Upcoming activities/workshops planned for Grade 1",
    events: [
      {
        title: "Daily Hygiene & First Aid",
        subtitle: "for Class 1",
        date: "25/10/2023",
      },
      {
        title: "Traffic / Safety Rules",
        subtitle: "for Class 1",
        date: "20/11/2023",
      },
      {
        title: "My Safe Circle & Strangers",
        subtitle: "for Class 1",
        date: "18/12/2023",
      },
    ],
  },
  {
    grade: "Upcoming activities/workshops planned for Grade 2",
    events: [
      {
        title: "Speaking Activity",
        subtitle: "for Class II Section A & B",
        date: "21/10/2023",
      },
      {
        title: "Speaking Activity",
        subtitle: "for Class II Section C & D",
        date: "28/10/2023",
      },
    ],
  },
];

export default function Events() {
  return (
    <div className="home_version_02 bg-gray-50">
      {/* ===== Header (bg-primary) ===== */}
      <div className="bg-[#337ab7] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-10 text-center">
            <h2 className="text-3xl font-semibold mb-2">Events</h2>
            <p className="text-sm">
              <a href="/" className="hover:underline">
                Home
              </a>{" "}
              <span className="mx-2">›</span>
              <span className="opacity-80">Events</span>
            </p>
          </div>
        </div>
      </div>

      {/* ===== Events Section ===== */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {eventsData.map((group, idx) => (
            <div key={idx}>
              {/* Grade Title */}
              <h4 className="mb-8 bg-gray-200 px-6 py-4 text-lg font-semibold">
                {group.grade}
              </h4>

              {/* Events Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.events.map((event, i) => (
                  <div
                    key={i}
                    className="bg-white shadow hover:shadow-xl transition p-6 text-center"
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {event.title}
                      <br />
                      <span className="text-blue-600 text-sm">
                        {event.subtitle}
                      </span>
                    </h3>

                    <div className="flex justify-center items-center gap-2 text-red-600 font-medium mt-3">
                      <FaClock />
                      <span>{event.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
