export default function About() {
  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-6">

      <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538"
            className="w-60 sm:w-72 md:w-80 rounded-2xl shadow-lg"
          />
        </div>

        <div className="text-center md:text-left">
          <p className="text-lg leading-relaxed mb-4">
            I’m a developer who loves creating fast, responsive apps.
          </p>
          <p className="text-gray-600 leading-relaxed">
            I work with React, Tailwind, IoT, backend, and modern web tools.
          </p>
        </div>

      </div>
    </section>
  );
}
