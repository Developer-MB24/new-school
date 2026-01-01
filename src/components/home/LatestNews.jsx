const blogs = [
  {
    title: "Funny lessons for kids",
    date: "March 30, 2023",
    image:
      "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/pexels-gustavo-fring-3985072-min-740x520.jpg",
    category: "Kids Education",
    link: "https://kidbawp.codebasket.net/funny-lessons-for-kids/",
  },
  {
    title: "San without anta base",
    date: "March 30, 2023",
    image:
      "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/pexels-gustavo-fring-3985061-min-740x520.jpg",
    category: "Kids Education",
    link: "https://kidbawp.codebasket.net/san-without-anta-base/",
  },
  {
    title: "Optimal Ergon Read",
    date: "March 29, 2023",
    image:
      "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/img-5-740x520.jpg",
    category: "Uncategorized",
    link: "https://kidbawp.codebasket.net/optimal-ergonomics-reading-writing/",
  },
];

export default function LatestNews() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-6">Our Latest News</h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Here is what you can expect from a house cleaning from a Handy
            professional. Download the app to share further cleaning details and
            instructions!
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, i) => (
            <div key={i} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="relative">
                <a href={blog.link} target="_blank" rel="noreferrer">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover"
                  />
                </a>
                <span className="absolute bottom-4 left-4 bg-white px-4 py-1 rounded-full text-sm shadow">
                  📅 {blog.date}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  <a href={blog.link} className="hover:text-green-600">
                    {blog.title}
                  </a>
                </h3>
                <p className="text-gray-500 mb-5">
                  Serenity has taken possession of my entire soul like these
                  sweet…
                </p>

                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>❤️ {blog.category}</span>
                  <span>💬 No Comment</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
