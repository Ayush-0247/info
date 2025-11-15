import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  const PROJECTS = [
    {
      id: "ecommerce",
      title: "E-Commerce Platform",
      desc: "A full-stack e-commerce web app with product pages, cart system, and checkout workflow.",
      year: 2024,
    },
    {
      id: "taskapp",
      title: "Task Management App",
      desc: "A real-time task tracking tool built with React and Firebase.",
      year: 2024,
    },
    {
      id: "iot-energy",
      title: "IoT Smart Energy Meter",
      desc: "An IoT-based dashboard to monitor power usage using Arduino and web UI.",
      year: 2025,
    },
  ];

  return (
    <section id="projects" className="py-28 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {PROJECTS.map((p) => (
          <div
            key={p.id}
            className="border rounded-2xl p-6 hover:shadow-xl transition cursor-pointer"
            onClick={() => navigate(`/projects/${p.id}`)}
          >
            <div className="flex justify-between mb-3">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">
                {p.year}
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>

            <button
              onClick={() => navigate(`/projects/${p.id}`)}
              className="mt-4 text-black underline text-sm"
            >
              View Details →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
