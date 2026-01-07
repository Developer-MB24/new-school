export default function Blogmain() {
  return (
    <main className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Blog Content */}
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {/* Post */}
              <article className="border border-gray-200">
                <img
                  src="https://kidbawp.codebasket.net/wp-content/uploads/2023/03/pexels-gustavo-fring-3985072-min.jpg"
                  alt="Funny lessons for kids"
                  className="w-full"
                />
                <div className="p-10">
                  <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-5">
                    <span>March 30, 2023</span>
                    <span>kidba</span>
                    <span>No Comments</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 hover:text-emerald-500 transition mb-4">
                    Funny lessons for kids
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Serenity hassr taken posseson of my entire soung like these
                    sweet mornings...
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-emerald-500 text-white px-6 py-3 rounded hover:bg-emerald-600 transition"
                  >
                    Read more
                  </a>
                </div>
              </article>

              <article className="border border-gray-200">
                <img
                  src="https://kidbawp.codebasket.net/wp-content/uploads/2023/03/pexels-gustavo-fring-3985061-min.jpg"
                  alt="San without anta base"
                  className="w-full"
                />
                <div className="p-10">
                  <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-5">
                    <span>March 30, 2023</span>
                    <span>kidba</span>
                    <span>No Comments</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 hover:text-emerald-500 transition mb-4">
                    San without anta base
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Serenity hassr taken posseson of my entire soung like these
                    sweet mornings...
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-emerald-500 text-white px-6 py-3 rounded hover:bg-emerald-600 transition"
                  >
                    Read more
                  </a>
                </div>
              </article>

              {/* Pagination */}
              <div className="flex gap-3 mt-10">
                <span className="w-10 h-10 flex items-center justify-center border bg-emerald-500 text-white">
                  1
                </span>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border hover:bg-gray-100"
                >
                  2
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            {/* Search */}
            <div className="border border-gray-200">
              <div className="border-b px-6 py-4">
                <h4 className="text-xl font-bold">Search</h4>
              </div>
              <div className="p-6">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-emerald-200"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="border border-gray-200">
              <div className="border-b px-6 py-4">
                <h4 className="text-xl font-bold">Post Categories</h4>
              </div>
              <ul className="p-6 space-y-3">
                <li className="hover:text-emerald-500 cursor-pointer">
                  Kids Education
                </li>
                <li className="hover:text-emerald-500 cursor-pointer">
                  Kids Learning
                </li>
                <li className="hover:text-emerald-500 cursor-pointer">
                  Uncategorized
                </li>
              </ul>
            </div>

            {/* Popular Posts */}
            <div className="border border-gray-200">
              <div className="border-b px-6 py-4">
                <h4 className="text-xl font-bold">Popular Posts</h4>
              </div>
              <ul className="p-6 space-y-4 text-gray-700">
                <li className="hover:text-emerald-500 cursor-pointer">
                  Funny lessons for kids
                </li>
                <li className="hover:text-emerald-500 cursor-pointer">
                  San without anta base
                </li>
                <li className="hover:text-emerald-500 cursor-pointer">
                  Optimal Ergon Read
                </li>
              </ul>
            </div>

            {/* Tags */}
            <div className="border border-gray-200">
              <div className="border-b px-6 py-4">
                <h4 className="text-xl font-bold">Popular Tags</h4>
              </div>
              <div className="p-6 flex flex-wrap gap-3">
                {["education", "kids", "learning"].map((tag) => (
                  <span
                    key={tag}
                    className="border px-4 py-2 text-sm hover:bg-emerald-500 hover:text-white transition cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
