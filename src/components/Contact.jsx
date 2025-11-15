export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 max-w-6xl mx-auto px-6 text-center"
    >
      {/* Heading */}
      <h2
        className="text-4xl sm:text-6xl font-extrabold tracking-tight opacity-0 animate-fadeUp"
      >
        Let’s Build Something Great
      </h2>

      {/* Subtext */}
      <p
        className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto opacity-0 animate-fadeUp delay-200"
      >
        Whether you want to collaborate on a project, need help building an idea,
        or just want to connect — my inbox is always open.
      </p>

      {/* Availability */}
      <div
        className="mt-6 text-gray-600 opacity-0 animate-fadeUp delay-300"
      >
        <p>📩 <b>Response time:</b> within 24 hours</p>
        <p>🟢 <b>Availability:</b> open for freelance & collaboration</p>
      </div>

      {/* Contact Card */}
      <div
        className="mt-16 bg-white rounded-2xl shadow-xl p-10 mx-auto
                   max-w-xl border border-gray-100 opacity-0 animate-fadeUp delay-500
                   hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
      >
        <h3 className="text-2xl font-semibold mb-3">
          Ready to Start?
        </h3>
        <p className="text-gray-600 mb-6">
          Click below to drop me an email.
        </p>

        <a
          href="mailto:youremail@gmail.com"
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-6
                     rounded-full bg-black text-white font-medium text-lg
                     hover:scale-105 transition-transform duration-300"
        >
          Start Conversation →
        </a>
      </div>

      {/* Social Links */}
      <div
        className="mt-12 flex items-center justify-center gap-6 opacity-0 animate-fadeUp delay-700"
      >
        <a
          href="https://linkedin.com"
          target="_blank"
          className="flex items-center gap-2 text-gray-700 hover:text-black
                     hover:scale-110 transition-all duration-300"
        >
          🔗 LinkedIn
        </a>

        <a
          href="https://github.com"
          target="_blank"
          className="flex items-center gap-2 text-gray-700 hover:text-black
                     hover:scale-110 transition-all duration-300"
        >
          💻 GitHub
        </a>
      </div>

      {/* Footer Note */}
      <p
        className="text-gray-400 mt-16 text-sm opacity-0 animate-fadeUp delay-900"
      >
        © {new Date().getFullYear()} AYUSH RAJ
      </p>
    </section>
  );
}
