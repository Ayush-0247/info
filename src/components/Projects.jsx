import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  const PROJECTS = [
    {
      id: "ecommerce",
      title: "E-Commerce Platform",
      desc: "A full-stack marketplace with product browsing, cart system, order handling, and authentication.",
      year: 2024,
      tags: ["Full Stack", "React", "Node.js"],
    },
    {
      id: "taskapp",
      title: "Task Management App",
      desc: "A real-time collaboration task app with cloud sync and beautiful UI.",
      year: 2024,
      tags: ["React", "Firebase", "Realtime"],
    },
    {
      id: "iot-energy",
      title: "IoT Smart Energy Meter",
      desc: "Live power monitoring using Arduino, sensors, and a responsive web dashboard.",
      year: 2025,
      tags: ["IoT", "Arduino", "Dashboard"],
    },
  ];

  return (
    <section id="projects" className="py-28 max-w-6xl mx-auto px-6">
      
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 opacity-0 animate-fadeUp">
        Projects
      </h2>
      <p className="text-gray-500 max-w-xl opacity-0 animate-fadeUp delay-200">
        Some of the work I’m most proud of — built with modern tools and clean architecture.
      </p>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {PROJECTS.map((p, i) => (
          <div
            key={p.id}
            onClick={() => navigate(`/projects/${p.id}`)}
            className="relative border rounded-2xl p-6 bg-white dark:bg-slate-800 
                       shadow-sm opacity-0 animate-fadeUp cursor-pointer
                       transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            style={{ animationDelay: `${0.3 + i * 0.15}s` }}
          >

            {/* Year Badge */}
            <span
              className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full
                         bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
            >
              {p.year}
            </span>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
              {p.desc}
            </p>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap mb-4">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={() => navigate(`/projects/${p.id}`)}
              className="text-sm text-black dark:text-white font-medium hover:underline"
            >
              View Details →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
