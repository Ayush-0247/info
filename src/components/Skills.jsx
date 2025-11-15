import { Code2, Boxes, Cloud, Database } from "lucide-react";

export default function Skills() {

  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 80 },
 
    { name: "Python", level: 75 },
  
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 opacity-0 animate-fadeUp">
        Technologies & Skills
      </h2>

      <p className="text-gray-500 max-w-2xl opacity-0 animate-fadeUp delay-200">
        Tools I use regularly to build clean, efficient, and scalable applications.
      </p>

      {/* Categories */}
      <div className="mt-12 grid md:grid-cols-4 gap-6">

        {/* Frontend Section */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-md border border-gray-100 
                        hover:-translate-y-1 hover:shadow-xl transition-all duration-500 
                        opacity-0 animate-fadeUp delay-300">
          <Code2 className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Frontend</h3>
          <p className="text-gray-500 text-sm">React, Next.js, Tailwind</p>
        </div>

        {/* Backend */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-md border border-gray-100
                        hover:-translate-y-1 hover:shadow-xl transition-all duration-500
                        opacity-0 animate-fadeUp delay-400">
          <Boxes className="w-8 h-8 text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Backend</h3>
          <p className="text-gray-500 text-sm">Node.js, Express, REST APIs</p>
        </div>

        {/* Databases */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-md border border-gray-100
                        hover:-translate-y-1 hover:shadow-xl transition-all duration-500
                        opacity-0 animate-fadeUp delay-500">
          <Database className="w-8 h-8 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Databases</h3>
          <p className="text-gray-500 text-sm">PostgreSQL, MongoDB</p>
        </div>

        {/* Cloud / DevOps */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-md border border-gray-100
                        hover:-translate-y-1 hover:shadow-xl transition-all duration-500
                        opacity-0 animate-fadeUp delay-600">
          <Cloud className="w-8 h-8 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Cloud / DevOps</h3>
          <p className="text-gray-500 text-sm">AWS, Docker, CI/CD</p>
        </div>
      </div>

      {/* Skill Bars */}
      <div className="mt-20 opacity-0 animate-fadeUp delay-700">
        <h3 className="text-2xl font-semibold mb-6">Skill Proficiency</h3>

        <div className="grid sm:grid-cols-2 gap-8">
          {skills.map(s => (
            <div key={s.name} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{s.name}</span>
                <span className="text-gray-500">{s.level}%</span>
              </div>

              <div className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
  <div
    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 
               rounded-full transition-all duration-700"
    style={{ width: `${s.level}%` }}
  ></div>
</div>

            </div>
          ))}
        </div>
      </div>

      
      <p className="text-gray-400 mt-12 text-sm opacity-0 animate-fadeUp delay-900">
        Constantly improving and learning new technologies every month.
      </p>
    </section>
  );
}
