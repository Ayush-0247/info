export default function Hero() {
  return (
    <section className="min-h-screen flex items-center max-w-7xl mx-auto ">

      <div className="grid md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT */}
        <div className="opacity-0 animate-fadeUp text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Turning Ideas Into
            <span className="block text-gray-600">Digital Experiences</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-md mx-auto md:mx-0">
            I build fast, modern, responsive websites.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a className="bg-black text-white px-6 py-3 rounded-full" href="#projects">
              View Projects →
            </a>
            <a className="border border-black px-6 py-3 rounded-full" href="/resume.pdf">
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center opacity-0 animate-zoomIn">
          <img
            src="https://th.bing.com/th/id/OIP.Mwc2uBDjxOBq1ECOb32gkgHaFT"
            className="w-60 sm:w-72 md:w-96 rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
