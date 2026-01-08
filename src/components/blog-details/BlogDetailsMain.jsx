import { FaCalendarAlt, FaUser, FaComment, FaQuoteLeft } from "react-icons/fa";

export default function BlogDetailsMain() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-8 bg-white p-8 rounded shadow">
          <img
            src="https://kidbawp.codebasket.net/wp-content/uploads/2023/03/pexels-gustavo-fring-3985072-min.jpg"
            className="w-full rounded mb-8"
            alt=""
          />

          <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-2">
              <FaCalendarAlt /> March 30, 2023
            </span>
            <span className="flex items-center gap-2">
              <FaUser /> kidba
            </span>
            <span className="flex items-center gap-2">
              <FaComment /> No Comments
            </span>
          </div>

          <p className="text-gray-600 leading-7 mb-6">
            Serenity has taken possession of my entire soul like these sweet
            mornings spring which enjoy with my whole heart...
          </p>

          {/* Quote */}
          <div className="bg-red-500 text-white p-8 rounded mb-10 relative">
            <FaQuoteLeft className="text-4xl opacity-20 absolute top-4 left-4" />
            <p className="text-lg italic relative">
              Steal into The nering Sanc How Myself Down Among The Half Grass
              Buzz Little World Among.
            </p>
            <span className="block mt-4 font-semibold">— Melissa Hunter</span>
          </div>

          <p className="text-gray-600 leading-7 mb-10">
            Serenity has taken possession of my entire soul like these sweet
            mornings spring...
          </p>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <img
              src="https://kidbawp.codebasket.net/wp-content/uploads/2023/03/gallery-img-7.jpg"
              className="rounded"
              alt=""
            />
            <img
              src="https://kidbawp.codebasket.net/wp-content/uploads/2023/03/gallery-img-8.jpg"
              className="rounded"
              alt=""
            />
          </div>

          {/* Video Banner */}
          <div
            className="h-64 rounded bg-cover bg-center mb-10"
            style={{
              backgroundImage:
                "url(https://kidbawp.codebasket.net/wp-content/uploads/2023/03/blog-img-5.jpg)",
            }}
          />

          <p className="text-gray-600 leading-7 mb-10">
            Serenity has taken possession of my entire soul like these sweet
            mornings spring...
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 border-t pt-6">
            <span className="font-semibold">Tags:</span>
            {["kids", "learning"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 rounded text-sm hover:bg-green-500 hover:text-white cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Category List */}
          <div className="mt-16 mb-20">
            <h5 className="text-lg font-semibold mb-4">Category:</h5>

            <div className="flex flex-wrap gap-4">
              <a
                href="/category/kids-education"
                className="text-green-600 hover:underline transition"
              >
                Kids Education
              </a>

              <a
                href="/category/uncategorized"
                className="text-green-600 hover:underline transition"
              >
                Uncategorized
              </a>
            </div>
          </div>

          {/* Blog Navigation */}
          <div className="border-t pt-10 mt-16 mb-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Previous Article */}
              <a
                href="/san-without-anta-base"
                className="block p-6 border rounded hover:shadow transition"
              >
                <span className="flex items-center gap-2 text-sm font-semibold uppercase text-gray-500 mb-3">
                  ← Previous Article
                </span>
                <span className="text-lg font-medium text-gray-800">
                  San without anta base
                </span>
              </a>

              {/* Next Article (empty placeholder) */}
              <div />
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white p-8 rounded shadow mt-12">
            <h3 className="text-xl font-semibold mb-6">Leave a Reply</h3>

            <p className="text-sm text-gray-500 mb-4">
              Your email address will not be published. Required fields are
              marked *
            </p>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Comment <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="6"
                  required
                  className="w-full border rounded px-4 py-2 focus:ring focus:ring-green-200"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border rounded px-4 py-2 focus:ring focus:ring-green-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border rounded px-4 py-2 focus:ring focus:ring-green-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Website
                </label>
                <input
                  type="url"
                  className="w-full border rounded px-4 py-2 focus:ring focus:ring-green-200"
                />
              </div>

              <div className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  id="cookies"
                  className="accent-green-500"
                />
                <label htmlFor="cookies">
                  Save my name, email, and website for next time.
                </label>
              </div>

              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Search */}
          <div className="bg-white p-6 rounded shadow">
            <h4 className="font-semibold mb-4">Search</h4>
            <input
              type="text"
              placeholder="Search..."
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Categories */}
          <div className="bg-white p-6 rounded shadow">
            <h4 className="font-semibold mb-4">Categories</h4>
            {[
              "Kids Education (3)",
              "Kids Learning (1)",
              "Uncategorized (5)",
            ].map((cat) => (
              <div
                key={cat}
                className="flex justify-between py-2 border-b text-gray-600"
              >
                <span>{cat.split(" (")[0]}</span>
                <span>{cat.match(/\d+/)}</span>
              </div>
            ))}
          </div>

          {/* Popular Posts */}
          <div className="bg-white p-6 rounded shadow">
            <h4 className="font-semibold mb-4">Popular Posts</h4>
            {[
              {
                title: "Funny lessons for kids",
                img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/pexels-gustavo-fring-3985072-min.jpg",
              },
              {
                title: "San without anta base",
                img: "https://kidbawp.codebasket.net/wp-content/uploads/2023/03/pexels-gustavo-fring-3985061-min.jpg",
              },
            ].map((post) => (
              <div key={post.title} className="flex gap-4 mb-4">
                <img
                  src={post.img}
                  className="w-16 h-16 rounded object-cover"
                  alt=""
                />
                <span className="text-sm font-medium">{post.title}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="bg-white p-6 rounded shadow">
            <h4 className="font-semibold mb-4">Popular Tags</h4>
            <div className="flex flex-wrap gap-2">
              {["education", "kids", "learning"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 rounded text-sm hover:bg-green-500 hover:text-white cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
