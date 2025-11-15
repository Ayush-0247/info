import { useParams } from "react-router-dom";

const PROJECTS = {
  ecommerce: {
    title: "E-Commerce Platform",
    desc: "Full-stack Next.js commerce app.",
    tags: ["Next.js", "Stripe"]
  },
  taskapp: {
    title: "Task Management App",
    desc: "Real-time collaboration tool.",
    tags: ["React", "Socket.io"]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS[id];

  if (!project) return <h2 className="p-10">Project not found</h2>;

  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="mt-4 text-gray-600">{project.desc}</p>

      <div className="flex gap-3 mt-6">
        {project.tags.map(tag => (
          <div key={tag} className="px-3 py-1 bg-gray-100 rounded-full">{tag}</div>
        ))}
      </div>
    </section>
  );
}
