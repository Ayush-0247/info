import { Link } from "react-router-dom";

const POSTS = [
  { slug: "clean-code", title: "Clean Code Practices", excerpt: "Writing scalable code..." },
  { slug: "deploying", title: "Deploy on Vercel", excerpt: "Zero-config deploy..." },
];

export default function BlogList() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-6">Blog</h2>

      {POSTS.map(p => (
        <div key={p.slug} className="border p-6 rounded-xl mb-4">
          <Link to={`/blog/${p.slug}`}>
            <h3 className="text-2xl">{p.title}</h3>
            <p className="text-gray-500 mt-2">{p.excerpt}</p>
          </Link>
        </div>
      ))}
    </section>
  );
}
