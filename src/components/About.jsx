export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">

      {/* Heading */}
      <h2
        className="text-4xl sm:text-5xl font-extrabold mb-12 text-center md:text-left
                   opacity-0 animate-fadeUp"
      >
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-14 items-center">

        {/* Image */}
        <div className="flex justify-center opacity-0 animate-fadeUp delay-200">
          <div className="relative w-60 sm:w-72 md:w-80">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500
                             blur-2xl opacity-30 rounded-3xl"></span>

            <img
              src="https://th.bing.com/th/id/OIP.Mwc2uBDjxOBq1ECOb32gkgHaFT"
              className="w-full rounded-2xl shadow-xl relative z-10
                         hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center md:text-left opacity-0 animate-fadeUp delay-300">

          <p className="text-lg leading-relaxed mb-4">
            Hi! I'm a developer passionate about creating beautiful, fast, and scalable digital products.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            I enjoy working across the full stack — from user-friendly frontends to powerful backends
            and IoT-based solutions. I love building things that solve real problems and deliver a great experience.
          </p>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 
                            shadow-sm hover:shadow-md transition-all duration-300
                            opacity-0 animate-fadeUp delay-500">
              <h4 className="font-semibold text-lg">1+ Years</h4>
              <p className="text-gray-500 text-sm">Coding Experience</p>
            </div>

            <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 
                            shadow-sm hover:shadow-md transition-all duration-300
                            opacity-0 animate-fadeUp delay-600">
              <h4 className="font-semibold text-lg">6+ Projects</h4>
              <p className="text-gray-500 text-sm">Web & IoT Solutions</p>
            </div>

            <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 
                            shadow-sm hover:shadow-md transition-all duration-300
                            opacity-0 animate-fadeUp delay-700">
              <h4 className="font-semibold text-lg">Full Stack</h4>
              <p className="text-gray-500 text-sm">React • Node • APIs</p>
            </div>

          
          </div>

        </div>
      </div>
    </section>
  );
}
