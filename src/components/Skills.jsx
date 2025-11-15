export default function Skills() {
  const skills = [
    "React", "Next.js", "Node.js", "TypeScript",
    "Python", "PostgreSQL", "AWS", "Docker"
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-10">Technologies</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map(s => (
          <div key={s} className="bg-gray-100 dark:bg-slate-700 py-4 rounded-xl text-center">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
