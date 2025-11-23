// src/components/Blog.jsx

export default function Blog() {
  return (
    <section id="blogs" className="min-h-screen pt-24 px-6 bg-white">
      <h1 className="text-4xl font-bold text-center">Blogs</h1>

      <div className="max-w-4xl mx-auto mt-6 text-lg text-gray-700">
        <p className="text-center">
          Your blog posts will appear here…
        </p>

        {/* Example Blog Cards */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="border p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">Blog Title 1</h2>
            <p className="text-gray-600">
              This is a sample blog description…
            </p>
          </div>

          <div className="border p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">Blog Title 2</h2>
            <p className="text-gray-600">
              Another sample blog description…
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
