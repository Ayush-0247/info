export default function About() {
  return (
    <section
      id="about"
      className="py-28 max-w-6xl mx-auto px-6 lg:px-0"
    >
      {/* Heading */}
      <h2
        className="text-4xl sm:text-5xl font-extrabold mb-16 text-center md:text-left relative inline-block
                   opacity-0 animate-fadeUp"
      >
        About Me
        <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 md:left-0 md:translate-x-0 w-24 h-[3px]
                         bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
      </h2>

      {/* ------------------ CONTENT + CARDS SIDE BY SIDE ------------------ */}
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT: CONTENT */}
        <div className="text-center md:text-left opacity-0 animate-fadeUp delay-300">
          <p className="text-lg leading-relaxed mb-4">
            Hi! I'm a developer passionate about creating beautiful, fast, and scalable digital products.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
            I enjoy working across the full stack — from intuitive frontends to powerful backend systems
            and IoT-based solutions. I build things that solve real problems and deliver great user experiences.
          </p>
        </div>

        {/* RIGHT: HIGHLIGHT CARDS */}
        <div className="grid grid-cols-2 gap-5 opacity-0 animate-fadeUp delay-400">

          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700
                          bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg
                          transition-all duration-300">
            <h4 className="font-semibold text-xl">1+</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Years Experience</p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700
                          bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg
                          transition-all duration-300">
            <h4 className="font-semibold text-xl">6+</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Projects Built</p>
          </div>

          <div className="col-span-2 p-6 rounded-xl border border-gray-200 dark:border-gray-700
                          bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg
                          transition-all duration-300">
            <h4 className="font-semibold text-xl">Full Stack</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">React • Node • APIs</p>
          </div>

        </div>
      </div>

      {/* ------------------ TIMELINE BELOW FULL WIDTH ------------------ */}
      <div className="mt-20 opacity-0 animate-fadeUp delay-900">
        <h3 className="text-2xl font-bold mb-10 text-center md:text-left">My Journey</h3>

        {/* Horizontal Timeline */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between gap-10">

          {/* Line */}
          <div className="hidden md:block absolute left-0 right-0 top-5 h-[3px] 
                          bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

          {/* Step 1 */}
          <div className="relative md:text-center md:w-1/5">
            <div className="w-4 h-4 rounded-full bg-blue-500 mx-auto mb-3 md:mb-6"></div>
            <h4 className="font-semibold text-lg">2023</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Started programming with C, basic logic & projects.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative md:text-center md:w-1/5">
            <div className="w-4 h-4 rounded-full bg-blue-500 mx-auto mb-3 md:mb-6"></div>
            <h4 className="font-semibold text-lg">2024</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Learned web development — HTML, CSS, JS.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative md:text-center md:w-1/5">
            <div className="w-4 h-4 rounded-full bg-blue-500 mx-auto mb-3 md:mb-6"></div>
            <h4 className="font-semibold text-lg">2024</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built IoT projects: energy meter, GPS safety band, sensors.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative md:text-center md:w-1/5">
            <div className="w-4 h-4 rounded-full bg-blue-500 mx-auto mb-3 md:mb-6"></div>
            <h4 className="font-semibold text-lg">2025</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Full-stack MERN development. APIs, auth, dashboards.
            </p>
          </div>

          {/* Step 5 */}
          <div className="relative md:text-center md:w-1/5">
            <div className="w-4 h-4 rounded-full bg-blue-500 mx-auto mb-3 md:mb-6"></div>
            <h4 className="font-semibold text-lg">Future</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Integrating IoT + AI + full-stack apps at scale.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}