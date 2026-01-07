import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        {/* Left - Form */}
        <div>
          <p className="text-sm text-gray-500 mb-2">Get In Touch</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Have Any Query?
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <input
              type="text"
              placeholder="Message Subject"
              className="w-full border border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <textarea
              rows="6"
              placeholder="Leave Message"
              className="w-full border border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            ></textarea>

            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md shadow-md transition">
              SUBMIT NOW
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="space-y-8">
          {[
            {
              title: "VISIT OFFICE",
              value: "New Elefent Road, Dhaka",
              icon: "📍",
            },
            {
              title: "CALL ANYTIME",
              value: "+880 123 456 789",
              icon: "📞",
            },
            {
              title: "SEND EMAIL",
              value: "contact@yourmail.com",
              icon: "✉️",
            },
            {
              title: "VISIT US",
              value: "www.yoursite.com",
              icon: "🌐",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-5 border-b pb-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-gray-400 tracking-wide mb-1">
                  {item.title}
                </p>
                <p className="text-gray-800 font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full h-[450px]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=London%20Eye&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
