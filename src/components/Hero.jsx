export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-0 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT */}
        <div className="opacity-0 animate-fadeUp text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gray-700">Ayush Raj</span>
            <span className="block mt-2">Full-Stack Web Developer</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-md mx-auto md:mx-0">
            I design and build fast, modern, scalable web applications — combining clean UI with reliable backend engineering.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-900 transition-all duration-200 hover:scale-[1.03]"
            >
              View My Work →
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-full border border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-200 hover:scale-[1.03]"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center opacity-0 animate-zoomIn">
          <img
            src="https://th.bing.com/th/id/OIP.Mwc2uBDjxOBq1ECOb32gkgHaFT"
            className="w-64 sm:w-80 md:w-[36rem] rounded-3xl shadow-xl shadow-gray-300"
            alt="Developer Illustration"
          />
        </div>

      </div>
    </section>
  );
}
