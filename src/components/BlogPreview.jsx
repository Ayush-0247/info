import { Link } from "react-router-dom";

const POSTS = [
  { slug: "clean-code", title: "Clean Code Practices", excerpt: "How I write scalable code..." },
  { slug: "deploying", title: "Deploying on Vercel", excerpt: "Simplest deploy method..." },
];

export default function BlogPreview() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Latest Articles</h2>
        <Link to="/blog" className="text-gray-500">View All →</Link>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {POSTS.map(p => (
          <div key={p.slug} className="border p-6 rounded-xl">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-gray-500 mt-2">{p.excerpt}</p>
            <Link to={`/blog/${p.slug}`} className="text-sm mt-3 block">Read →</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
